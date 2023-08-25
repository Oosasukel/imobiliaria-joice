import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {
  Configurations,
  EnumItem,
  Enums,
  House,
  HouseFilters,
} from '../useApi/types';

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
    setSelectedHouse: Dispatch<SetStateAction<House>>;
  };
}

const AppContext = createContext({} as IAppState);

interface AppProviderProps {
  children: ReactNode;
  configs: Configurations;
  enums: Enums;
  cities: string[];
}
export const AppProvider = ({
  children,
  configs,
  enums,
  cities,
}: AppProviderProps) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minSquareMeters: '',
    maxSquareMeters: '',
  } as Filters);
  const [city, setCity] = useState('');
  const [toRent, setToRent] = useState(true);
  const [selectedHouse, setSelectedHouse] = useState<House>();

  return (
    <AppContext.Provider
      value={{
        state: {
          filters,
          city,
          toRent,
          cities,
          types: enums.types,
          status: enums.status,
          selectedHouse,
          configs,
        },
        operations: {
          setFilters,
          setCity,
          setToRent,
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
