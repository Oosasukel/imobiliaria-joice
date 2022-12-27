import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { HouseFilters } from '../useApi/types';

interface IAppState {
  state: {
    filters: HouseFilters;
  };
  operations: {
    setFilters: Dispatch<SetStateAction<HouseFilters>>;
  };
}

const AppContext = createContext({} as IAppState);

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  const [filters, setFilters] = useState({} as HouseFilters);

  return (
    <AppContext.Provider
      value={{
        state: {
          filters,
        },
        operations: {
          setFilters,
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
