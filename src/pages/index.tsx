import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { Enums } from '../hooks/useApi/types';
import { useAppState } from '../hooks/useAppState';
import { Home } from '../pageComponents/Home';
import { api } from '../services/api';

interface HomePageProps {
  enums: Enums;
  cities: string[];
}

const HomePage = ({ enums, cities }: HomePageProps) => {
  const {
    operations: { setCities, setStatus, setTypes },
  } = useAppState();

  useEffect(() => {
    setCities(cities);
    setStatus(enums.status);
    setTypes(enums.types);
  }, [cities, enums.status, enums.types, setCities, setStatus, setTypes]);

  return <Home />;
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

export default HomePage;
