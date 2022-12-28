import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Configurations, EnumItem, House, HouseFilters } from '../useApi/types';

export interface Filters
  extends Omit<
    HouseFilters,
    | 'pageSize'
    | 'initialId'
    | 'city'
    | 'minRentPrice'
    | 'maxRentPrice'
    | 'minSellPrice'
    | 'maxSellPrice'
  > {
  maxPrice?: string;
  minPrice?: string;
}

interface IAppState {
  state: {
    filters: Filters;
    city: string;
    toRent: boolean;
    cities: string[];
    types: EnumItem[];
    status: EnumItem[];
    selectedHouse?: House;
    configs: Configurations;
  };
  operations: {
    setFilters: Dispatch<SetStateAction<Filters>>;
    setCity: Dispatch<SetStateAction<string>>;
    setToRent: Dispatch<SetStateAction<boolean>>;
    setCities: Dispatch<SetStateAction<string[]>>;
    setTypes: Dispatch<SetStateAction<EnumItem[]>>;
    setStatus: Dispatch<SetStateAction<EnumItem[]>>;
    setSelectedHouse: Dispatch<SetStateAction<House>>;
  };
}

const AppContext = createContext({} as IAppState);

interface AppProviderProps {
  children: ReactNode;
  configs: Configurations;
}
export const AppProvider = ({ children, configs }: AppProviderProps) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minSquareMeters: '',
    maxSquareMeters: '',
  } as Filters);
  const [city, setCity] = useState('');
  const [toRent, setToRent] = useState(true);
  const [cities, setCities] = useState<string[]>([]);
  const [types, setTypes] = useState<EnumItem[]>([]);
  const [status, setStatus] = useState<EnumItem[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<House>();

  return (
    <AppContext.Provider
      value={{
        state: {
          filters,
          city,
          toRent,
          cities,
          types,
          status,
          selectedHouse,
          configs,
        },
        operations: {
          setFilters,
          setCity,
          setToRent,
          setCities,
          setTypes,
          setStatus,
          setSelectedHouse,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);

  return context;
};
