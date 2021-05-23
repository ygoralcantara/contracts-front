export interface Address {
  id: number;
  zipCode: string;
  street: string;
  number: number;
  addressLine: string;
  district: string;
  city: string;
  stateCode: string;
}

export interface ServiceIndustry {
  id: number;
  cpfCnpj: string;
  name: string;
  email: string;
  type: string;
  address: Address;
}

export interface ListServiceIndustryQueryParams {
  page: number;
  limit: number;
}

export interface ListServiceIndustryResponse {
  statusCode: number;
  page: number;
  limit: number;
  totalCount: number;
  data: ServiceIndustry[];
}
