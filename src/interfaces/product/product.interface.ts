export interface IProduct {
  name: string;
  category: string;
  quantity: number;
}

export interface IProductResponse {
  id: string;
  name: string;
  category: string;
  status: string;
  quantity: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}