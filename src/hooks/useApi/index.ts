import { useCallback } from 'react';
import { api } from '../../services/api';
import {
  Configurations,
  CreateHouse,
  EditHouse,
  Enums,
  House,
  HouseFilters,
  HousesList,
  Login,
} from './types';

export const useApi = () => {
  const login = useCallback((email: string, password: string) => {
    return api.post<Login>('/api/login', {
      email,
      password,
    });
  }, []);

  const logout = useCallback(() => {
    return api.get('/api/logout');
  }, []);

  const getConfigurations = useCallback(() => {
    return api.get<Configurations>('/api/configurations');
  }, []);

  const setConfigurations = useCallback((data: Configurations) => {
    return api.patch<Configurations>('/api/configurations', data);
  }, []);

  const getCities = useCallback(() => {
    return api.get<string[]>('/api/cities');
  }, []);

  const getEnums = useCallback(() => {
    return api.get<Enums>('/api/enums');
  }, []);

  const createHouse = useCallback((house: CreateHouse) => {
    const formData = new FormData();
    formData.append('id', house.id);
    formData.append('type', house.type);
    formData.append('city', house.city);
    formData.append('district', house.district);
    formData.append('street', house.street);
    formData.append('typeId', house.typeId);
    formData.append('squareMeters', house.squareMeters);
    formData.append('bedrooms', house.bedrooms);
    formData.append('suites', house.suites);
    formData.append('bathrooms', house.bathrooms);
    formData.append('parkingSpaces', house.parkingSpaces);
    formData.append('furnished', house.furnished);
    formData.append('toRent', house.toRent);
    formData.append('rentPrice', house.rentPrice);
    formData.append('toSell', house.toSell);
    formData.append('sellPrice', house.sellPrice);
    formData.append('condominiumPrice', house.condominiumPrice);
    formData.append('iptuPrice', house.iptuPrice);
    formData.append('aboutTheProperty', house.aboutTheProperty);
    formData.append('aboutTheCondominium', house.aboutTheCondominium);
    formData.append('admComments', house.admComments);
    formData.append('statusId', house.statusId);
    house.images.forEach((image) => {
      formData.append('images', image);
    });

    return api.post<House>('/api/houses', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }, []);

  const getHouses = useCallback((filters: HouseFilters) => {
    return api.get<HousesList>('/api/houses', { params: filters });
  }, []);

  const editHouse = useCallback((house: EditHouse) => {
    const formData = new FormData();
    formData.append('id', house.id);
    formData.append('type', house.type);
    formData.append('city', house.city);
    formData.append('district', house.district);
    formData.append('street', house.street);
    formData.append('typeId', house.typeId);
    formData.append('squareMeters', house.squareMeters);
    formData.append('bedrooms', house.bedrooms);
    formData.append('suites', house.suites);
    formData.append('bathrooms', house.bathrooms);
    formData.append('parkingSpaces', house.parkingSpaces);
    formData.append('furnished', house.furnished);
    formData.append('toRent', house.toRent);
    formData.append('rentPrice', house.rentPrice);
    formData.append('toSell', house.toSell);
    formData.append('sellPrice', house.sellPrice);
    formData.append('condominiumPrice', house.condominiumPrice);
    formData.append('iptuPrice', house.iptuPrice);
    formData.append('aboutTheProperty', house.aboutTheProperty);
    formData.append('aboutTheCondominium', house.aboutTheCondominium);
    formData.append('admComments', house.admComments);
    formData.append('statusId', house.statusId);
    house.images.forEach((image) => {
      formData.append('images', image);
    });
    house.imagesToRemove.forEach((imageToRemove) => {
      formData.append('imagesToRemove', imageToRemove);
    });

    return api.patch<House>('/api/houses', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }, []);

  const deleteHouse = useCallback((id: string) => {
    return api.delete(`/api/houses/${id}`);
  }, []);

  const getHouse = useCallback((id: string) => {
    return api.get<House>(`/api/houses/${id}`);
  }, []);

  const getAdmHouses = useCallback((filters: HouseFilters) => {
    return api.get<HousesList>('/api/adm/houses', { params: filters });
  }, []);

  const getAdmHouse = useCallback((id: string) => {
    return api.get<House>(`/api/adm/houses/${id}`);
  }, []);

  return {
    login,
    logout,
    getConfigurations,
    setConfigurations,
    getCities,
    getEnums,
    createHouse,
    getHouses,
    editHouse,
    deleteHouse,
    getHouse,
    getAdmHouses,
    getAdmHouse,
  };
};
