export interface Login {
  id: string;
  name: string;
  email: string;
}

export interface Configurations {
  name: string;
  perfilImageUrl: string;
  phoneNumber: string;
  creci: string;
}

export interface Enums {
  types: EnumItem[];
  status: EnumItem[];
}

export interface EnumItem {
  id: number;
  name: string;
}

export interface HousesList {
  nextId?: string;
  data: House[];
}

export interface CreateHouse {
  city: string;
  district: string;
  street: string;
  typeId: string;
  squareMeters: string;
  bedrooms: string;
  suites: string;
  bathrooms: string;
  parkingSpaces: string;
  furnished: string;
  toRent: string;
  rentPrice: string;
  toSell: string;
  sellPrice: string;
  condominiumPrice: string;
  iptuPrice: string;
  aboutTheProperty: string;
  aboutTheCondominium: string;
  admComments: string;
  statusId: string;
  images: ImageItem[];
  imagesToAdd: File[];
}

export interface EditHouse extends CreateHouse {
  id: string;
  imagesToRemove: string[];
}

export interface House {
  id: string;
  type: string;
  status: string;
  city: string;
  district: string;
  street: string;
  typeId: number;
  squareMeters: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpaces: number;
  furnished: boolean;
  toRent: boolean;
  rentPrice: number;
  toSell: boolean;
  sellPrice: number;
  condominiumPrice: number;
  iptuPrice: number;
  aboutTheProperty: string;
  aboutTheCondominium: string;
  admComments?: string;
  statusId: number;
  images: ImageItem[];
}

export interface ImageItem {
  referenceUrl: string;
  url: string;
}

export interface HouseFilters {
  pageSize?: string;
  initialId?: string;
  city?: string;
  minRentPrice?: string;
  maxRentPrice?: string;
  minSellPrice?: string;
  maxSellPrice?: string;
  typeId?: string;
  bedrooms?: string;
  bathrooms?: string;
  suites?: string;
  parkingSpaces?: string;
  furnished?: string;
  minSquareMeters?: string;
  maxSquareMeters?: string;
}
