/* eslint-disable @next/next/no-img-element */
import { Formik } from 'formik';
import { ChangeEvent, useCallback, useState } from 'react';
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { Layout } from '../../../components/Layout';
import { useAppState } from '../../../hooks/useAppState';
import * as S from './styles';

export const Configs = () => {
  const {
    state: { configs },
  } = useAppState();
  const [imagePreview, setImagePreview] = useState(configs.perfilImageUrl);

  const imageToPreviewImage = useCallback((imageToConvert: File): string => {
    return URL.createObjectURL(imageToConvert);
  }, []);

  const toDataURL = useCallback((url, callback) => {
    // @TODO ajustar essa função
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

      const file = event.target.files.item(0);

      const fileString = imageToPreviewImage(file);
      toDataURL(fileString, (base64) => {
        setImagePreview(base64);
      });
    },
    [imageToPreviewImage]
  );

  return (
    <Layout admVersion={true}>
      <Formik
        initialValues={configs}
        onSubmit={(values) => {
          console.log('values', values);
          console.log('imagePreview', imagePreview);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <S.Container onSubmit={handleSubmit}>
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
                        alt=""
                      />
                    </div>

                    <Input
                      onChange={handleSelectImage}
                      className="img"
                      type="file"
                      id=""
                    />
                  </label>

                  <Button type="submit" variant="fourth">
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
