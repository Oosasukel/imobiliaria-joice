/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { Layout } from '../../../components/Layout';
import { Loading } from '../../../components/Loading';
import { Radio } from '../../../components/Radio';
import { TextArea } from '../../../components/TextArea';
import { useApi } from '../../../hooks/useApi';
import { EditHouse } from '../../../hooks/useApi/types';
import { useAppState } from '../../../hooks/useAppState';
import { api } from '../../../services/api';
import * as S from './styles';

export const Casa = () => {
  const router = useRouter();
  const {
    state: { types, status },
  } = useAppState();
  const { getAdmHouse, createHouse, editHouse, deleteHouse } = useApi();
  const [loading, setLoading] = useState(true);
  const [house, setHouse] = useState<EditHouse>({
    city: '',
    district: '',
    street: '',
    typeId: '',
    squareMeters: '',
    bedrooms: '',
    suites: '',
    bathrooms: '',
    parkingSpaces: '',
    furnished: '',
    toRent: '',
    rentPrice: '',
    toSell: '',
    sellPrice: '',
    condominiumPrice: '',
    iptuPrice: '',
    aboutTheProperty: '',
    aboutTheCondominium: '',
    admComments: '',
    statusId: '',
    imagesToAdd: [],

    id: '',
    images: [],
    imagesToRemove: [],
  });
  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);
  const [city, setCity] = useState<{ value: string; label: string }>();
  const typesSelect = useMemo(
    () => types.map((item) => ({ value: item.id, label: item.name })),
    [types]
  );
  const [typeSelected, setTypeSelected] = useState<{
    value: number;
    label: string;
  }>(typesSelect.length ? typesSelect[0] : undefined);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const { data } = await api.get(
          'https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome'
        );

        setCities(data.map((city) => ({ value: city.nome, label: city.nome })));
      } catch {
        // eslint-disable-next-line no-empty
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    if (!router.query.id) {
      setLoading(false);
      return;
    }

    const fetchHouse = async () => {
      const { data } = await getAdmHouse(router.query.id as string);

      setHouse((prev) => ({
        ...prev,
        ...data,
        typeId: String(data.typeId),
        squareMeters: String(data.squareMeters),
        bedrooms: String(data.bedrooms),
        suites: String(data.suites),
        bathrooms: String(data.bathrooms),
        parkingSpaces: String(data.parkingSpaces),
        rentPrice: String(data.rentPrice),
        sellPrice: String(data.sellPrice),
        condominiumPrice: String(data.condominiumPrice),
        iptuPrice: String(data.iptuPrice),
        statusId: String(data.statusId),

        toSell: String(data.toSell),
        toRent: String(data.toRent),
        furnished: String(data.furnished),

        // toSell: data.toSell ? (['toSell'] as any) : '',
        // toRent: data.toRent ? (['toRent'] as any) : '',
        // furnished: data.furnished ? (['furnished'] as any) : '',
      }));
      setCity({ label: data.city, value: data.city });
      setLoading(false);
    };

    fetchHouse();
  }, [getAdmHouse, router.isReady, router.query.id]);

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const imagesToPreviewImages = useCallback(
    (imagesToConvert: File[]): string[] => {
      const selectedImagesPreview = imagesToConvert.map((image) => {
        return URL.createObjectURL(image);
      });

      return selectedImagesPreview;
    },
    []
  );

  const handleRemoveOldImage = useCallback((referenceUrl: string) => {
    setHouse((prev) => ({
      ...prev,
      images: prev.images.filter((item) => item.referenceUrl !== referenceUrl),
      imagesToRemove: prev.imagesToRemove.concat(referenceUrl),
    }));
  }, []);

  const handleRemoveImage = useCallback(
    (index: number) => {
      const imagesUpdated = house.imagesToAdd.filter((_, imageIndex) => {
        return imageIndex !== index;
      });

      const imagesPreviewUpdated = imagesToPreviewImages(imagesUpdated);

      setHouse((prev) => ({
        ...prev,
        imagesToAdd: imagesUpdated,
      }));
      setPreviewImages(imagesPreviewUpdated);
    },
    [house.imagesToAdd, imagesToPreviewImages]
  );

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }

      const selectedImages = Array.from(event.target.files);
      const allImages = house.imagesToAdd.concat(selectedImages);

      const selectedImagesPreview = imagesToPreviewImages(allImages);

      setHouse((prev) => ({
        ...prev,
        imagesToAdd: allImages,
      }));
      setPreviewImages(selectedImagesPreview);
    },
    [house.imagesToAdd, imagesToPreviewImages]
  );

  const handleSubmit = useCallback(
    async (values: EditHouse) => {
      setSubmitting(true);

      try {
        let id = house.id;

        if (id) {
          // Edit
          await editHouse({
            ...values,
            city: city?.value,
            typeId: String(typeSelected.value),
            furnished: String(!!values.furnished.length),
            toRent: String(!!values.toRent.length),
            toSell: String(!!values.toSell.length),
            imagesToAdd: house.imagesToAdd,
            imagesToRemove: house.imagesToRemove,
            id,
          });
        } else {
          // Create
          const { data } = await createHouse({
            ...values,
            city: city?.value,
            typeId: String(typeSelected.value),
            furnished: String(!!values.furnished.length),
            toRent: String(!!values.toRent.length),
            toSell: String(!!values.toSell.length),
            imagesToAdd: house.imagesToAdd,
          });

          id = data.id;
        }

        return router.push(`/casa/${id}`);
      } catch (error) {
        setSubmitting(false);
        console.error(error);
        alert('Houve um erro ao salvar esta casa');
      }
    },
    [
      city,
      createHouse,
      editHouse,
      house.id,
      house.imagesToAdd,
      house.imagesToRemove,
      router,
      typeSelected.value,
    ]
  );

  const handleCancel = useCallback(() => {
    if (
      confirm('Quer mesmo cancelar? Você perderá as alterações não salvas.')
    ) {
      return router.push('/adm/casas');
    }
  }, [router]);

  const handleRemove = useCallback(async () => {
    if (house.id) {
      setSubmitting(true);

      try {
        await deleteHouse(house.id);

        return router.push('/adm/casas');
      } catch (error) {
        setSubmitting(false);
        console.error(error);
        alert('Houve um erro ao excluir esta casa');
      }
    }
  }, [deleteHouse, house.id, router]);

  if (loading) return <Loading />;

  return (
    <Layout admVersion={true}>
      <Formik initialValues={house} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <Card>
              <S.Galery>
                <S.Flex>
                  {house.images.map((image) => (
                    <div className="image-container" key={image.referenceUrl}>
                      <img src={image.url} alt="imagem da casa" />
                      <img
                        onClick={() => handleRemoveOldImage(image.referenceUrl)}
                        className="remove-image"
                        src="/icons/x.svg"
                        alt="Remover"
                      />
                    </div>
                  ))}

                  {previewImages.map((image, index) => (
                    <div className="image-container" key={index}>
                      <img src={image} alt="imagem da casa" />
                      <img
                        onClick={() => handleRemoveImage(index)}
                        className="remove-image"
                        src="/icons/x.svg"
                        alt="Remover"
                      />
                    </div>
                  ))}

                  <label>
                    <img src="/icons/+.svg" alt="" />

                    <Input
                      accept="image/png, image/gif, image/jpeg"
                      onChange={handleSelectImages}
                      type="file"
                      multiple
                    />
                  </label>
                </S.Flex>
              </S.Galery>

              <S.Conteudo>
                <p>Cidade</p>
                <Select
                  defaultValue={city}
                  options={cities}
                  onChange={setCity}
                  classNamePrefix="react-select"
                  className="react-select-container"
                  placeholder="Cidade"
                  instanceId="city-select"
                />

                <p>Bairro</p>
                <Input
                  type="text"
                  name="district"
                  onChange={handleChange}
                  value={values.district}
                  placeholder="Bairro"
                />

                <p>Rua</p>
                <Input
                  type="text"
                  name="street"
                  onChange={handleChange}
                  value={values.street}
                  placeholder="Rua"
                />

                <p>Tipo de Imóvel</p>
                <Select
                  defaultValue={typeSelected}
                  options={typesSelect}
                  onChange={setTypeSelected}
                  classNamePrefix="react-select"
                  className="react-select-container"
                  placeholder="Tipo de imóvel"
                  instanceId="city-select"
                />

                <S.Grid>
                  <div>
                    <p>Área</p>
                    <Input
                      type="number"
                      name="squareMeters"
                      onChange={handleChange}
                      value={values.squareMeters}
                      placeholder="m²"
                    />
                  </div>

                  <div>
                    <p>Quartos</p>
                    <Input
                      type="number"
                      name="bedrooms"
                      onChange={handleChange}
                      value={values.bedrooms}
                      placeholder="Quartos"
                    />
                  </div>

                  <div>
                    <p>Suites</p>
                    <Input
                      type="number"
                      name="suites"
                      onChange={handleChange}
                      value={values.suites}
                      placeholder="Suites"
                    />
                  </div>

                  <div>
                    <p>Banheiros</p>
                    <Input
                      type="number"
                      name="bathrooms"
                      onChange={handleChange}
                      value={values.bathrooms}
                      placeholder="Banheiros"
                    />
                  </div>

                  <div>
                    <p>Vagas</p>
                    <Input
                      type="number"
                      name="parkingSpaces"
                      onChange={handleChange}
                      value={values.parkingSpaces}
                      placeholder="Vagas"
                    />
                  </div>

                  <div className="chekbox">
                    <input
                      defaultChecked={house.furnished === 'true'}
                      className="input"
                      type={'checkbox'}
                      name="furnished"
                      onChange={handleChange}
                      value="furnished"
                    />
                    <label>Mobiliada</label>
                  </div>
                </S.Grid>

                <S.Valor>
                  <div className="chekbox">
                    <input
                      defaultChecked={house.toRent === 'true'}
                      className="input"
                      type={'checkbox'}
                      name="toRent"
                      onChange={handleChange}
                      value="toRent"
                    />
                    <label>Aluguel</label>
                  </div>

                  <div className="valor">
                    <p>Valor aluguel</p>
                    <Input
                      type="number"
                      name="rentPrice"
                      onChange={handleChange}
                      value={values.rentPrice}
                      placeholder="Valor aluguel"
                    />
                  </div>
                </S.Valor>

                <S.Valor>
                  <div className="chekbox">
                    <input
                      defaultChecked={house.toSell === 'true'}
                      className="input"
                      type={'checkbox'}
                      name="toSell"
                      onChange={handleChange}
                      value="toSell"
                    />
                    <label>Venda</label>
                  </div>

                  <div className="valor">
                    <p>Valor Venda</p>
                    <Input
                      type="number"
                      name="sellPrice"
                      onChange={handleChange}
                      value={values.sellPrice}
                      placeholder="Valor Venda"
                    />
                  </div>
                </S.Valor>

                <p>Valor condomínio</p>
                <Input
                  type="number"
                  name="condominiumPrice"
                  onChange={handleChange}
                  value={values.condominiumPrice}
                  placeholder="Valor condomínio"
                />

                <p>Valor IPTU</p>
                <Input
                  type="number"
                  name="iptuPrice"
                  onChange={handleChange}
                  value={values.iptuPrice}
                  placeholder="Valor IPTU"
                />

                <p>Sobre o imóvel</p>
                <Input
                  type="text"
                  name="aboutTheProperty"
                  onChange={handleChange}
                  value={values.aboutTheProperty}
                  placeholder="Sobre o imóvel"
                />

                <p>Sobre o condomínio</p>
                <Input
                  type="text"
                  name="aboutTheCondominium"
                  onChange={handleChange}
                  value={values.aboutTheCondominium}
                  placeholder="Sobre o condomínio"
                />

                <p>Observações ADM</p>
                <TextArea
                  name="admComments"
                  onChange={handleChange}
                  value={values.admComments}
                  placeholder="Observações ADM"
                  rows={6}
                  style={{ resize: 'vertical' }}
                />

                <S.Status>
                  {status.map(({ name, id }) => (
                    <Radio
                      key={id}
                      name="statusId"
                      label={name}
                      value={id.toString()}
                      onChange={handleChange}
                      checked={values.statusId === id.toString()}
                    />
                  ))}
                </S.Status>

                {submitting ? (
                  <Loading />
                ) : (
                  <>
                    <S.Actions>
                      <div>
                        <Button type="submit" variant="fourth" width="100%">
                          Salvar alterações
                        </Button>
                      </div>

                      <div>
                        <Button
                          onClick={handleCancel}
                          type="button"
                          variant="secondary"
                          width="100%"
                        >
                          Cancelar
                        </Button>
                      </div>
                    </S.Actions>

                    {!!house.id && (
                      <S.Excluir>
                        <div>
                          <Button
                            onClick={handleRemove}
                            type="button"
                            width="100%"
                          >
                            Excluir
                          </Button>
                        </div>
                      </S.Excluir>
                    )}
                  </>
                )}
              </S.Conteudo>
            </Card>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};
