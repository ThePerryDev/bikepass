export interface BikeProps {
  id: number;
  idUser: number;
  idCategory: number;
  idBrand: number;
  name:string;
  color: string;
  size: number;
  material: string;
  gender: string;
  speedkit: number;
  rim: number;
  suspension: boolean;
  description: string;
  hourlyvalue: number;
  dailyvalue: number;
  latitude: number;
  longitude: number;
}

export interface CategoriesProps {
  id: number;
  name: string;
}

export interface UsersProps {
  id: number;
  alias: string;
  mail: string;
  phone: string;
}

export interface Error {
  error: string;
  props: string;
}
export interface BrandProps {
  id: number;
  name: string;
}

export interface RentsProps {
  id: number;
  idBike: number;
  idClient: number;
  idOwner: number;
  rentalDate: Date;
  returnDate: Date;
  ownerValuation: number;
  clientValuation: number;
}
