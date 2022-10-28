export interface House {
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
  admComments: string;
  statusId: number;
  images: Array<{
    referenceUrl: string;
    url: string;
  }>;
}

export interface HouseResponseDTO extends House {
  id: string;
  type: string;
}

export interface HouseFilters {
  pageSize?: number;
  initialId?: string;
  city?: string;
  minRentPrice?: number;
  maxRentPrice?: number;
  minSellPrice?: number;
  maxSellPrice?: number;
  typeId?: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  suites?: number;
  furnished?: boolean;
  minSquareMeters?: number;
  maxSquareMeters?: number;
}
