import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { Enums } from '../hooks/useApi/types';
import { useAppState } from '../hooks/useAppState';
import { Casas } from '../pageComponents/Casas';
import { api } from '../services/api';

interface CasasPageProps {
  enums: Enums;
  cities: string[];
}

const CasasPage = ({ enums, cities }: CasasPageProps) => {
  const {
    operations: { setCities, setStatus, setTypes },
  } = useAppState();

  useEffect(() => {
    setCities(cities);
    setStatus(enums.status);
    setTypes(enums.types);
  }, [cities, enums.status, enums.types, setCities, setStatus, setTypes]);

  return <Casas />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: enums } = await api.get<Enums>('/api/enums');
  const { data: cities } = await api.get<string[]>('/api/cities');

  return {
    revalidate: 10 * 60, // 10 minutes
    props: {
      enums,
      cities,
    },
  };
};

export default CasasPage;
