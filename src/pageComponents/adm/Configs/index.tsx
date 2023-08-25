/* eslint-disable @next/next/no-img-element */
import { Formik } from 'formik';
import { useCallback, useState } from 'react';
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (values: Configurations) => {
      setLoading(true);

      try {
        await setConfigurations({
          ...values,
          phoneNumber: values.phoneNumber.toString(),
          perfilImageUrl: '',
        });
      } catch (error) {
        console.error(error);
        alert('Algo deu errado ao salvar as configurações.');
      } finally {
        setLoading(false);
      }
    },
    [setConfigurations]
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
