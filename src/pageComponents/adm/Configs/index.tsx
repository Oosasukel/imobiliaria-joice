/* eslint-disable @next/next/no-img-element */
import { Formik } from 'formik';
import { ChangeEvent, useCallback, useState } from 'react';
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { Layout } from '../../../components/Layout';
import { useApi } from '../../../hooks/useApi';
import { Configurations } from '../../../hooks/useApi/types';
import { useAppState } from '../../../hooks/useAppState';
import * as S from './styles';

export const Configs = () => {
  const {
    state: { configs },
  } = useAppState();
  const { setConfigurations } = useApi();
  const [imagePreview, setImagePreview] = useState(configs.perfilImageUrl);
  const [loading, setLoading] = useState(false);

  const imageToPreviewImage = useCallback((imageToConvert: File): string => {
    return URL.createObjectURL(imageToConvert);
  }, []);

  const toDataURL = useCallback((url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }, []);

  const handleSelectImage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files && !event.target.files.length) {
        return;
      }

      const selectedImages = Array.from(event.target.files);
      if (selectedImages.length) {
        const selectedImage = selectedImages[0];

        const fileString = imageToPreviewImage(selectedImage);
        toDataURL(fileString, (base64) => {
          setImagePreview(base64);
        });
      } else {
        setImagePreview('');
      }
    },
    [imageToPreviewImage, toDataURL]
  );

  const handleSubmit = useCallback(
    async (values: Configurations) => {
      setLoading(true);

      try {
        await setConfigurations({ ...values, perfilImageUrl: imagePreview });
      } catch (error) {
        console.error(error);
        alert('Algo deu errado ao salvar as configurações.');
      } finally {
        setLoading(false);
      }
    },
    [imagePreview, setConfigurations]
  );

  return (
    <Layout admVersion={true}>
      <Formik initialValues={configs} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit: handleSubmitFormik }) => (
          <S.Container onSubmit={handleSubmitFormik}>
            <S.ContainerCard>
              <Card>
                <S.Flex>
                  <div className="input-container">
                    <span>Nome</span>
                    <Input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      placeholder="Nome"
                    />
                  </div>

                  <div className="input-container">
                    <span>CRECI</span>
                    <Input
                      type="text"
                      name="creci"
                      onChange={handleChange}
                      value={values.creci}
                      placeholder="CRECI"
                    />
                  </div>

                  <div className="input-container">
                    <span>WhatsApp</span>
                    <Input
                      type="number"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={values.phoneNumber}
                      placeholder="+5515997979797"
                    />
                  </div>

                  <label className="preview-image-container">
                    <span>Imagem de perfil</span>
                    <div className="image-wrapper">
                      <img
                        src={
                          imagePreview
                            ? imagePreview
                            : '/images/no-profile-image.png'
                        }
                        alt="preview da imagem de perfil"
                      />
                    </div>

                    <Input
                      onChange={handleSelectImage}
                      className="img"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </label>

                  <Button loading={loading} type="submit" variant="fourth">
                    Salvar alterações
                  </Button>
                </S.Flex>
              </Card>
            </S.ContainerCard>
          </S.Container>
        )}
      </Formik>
    </Layout>
  );
};
