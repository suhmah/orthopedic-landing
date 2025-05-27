export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  videoUrl: string;
  images: string[];
  specs: string[];
  isNew?: boolean;
  detailsProduct: IProductDetails;
}
export interface IProductDetails {
  level: string;
  levelDescription: string;
  model: string;
  sizes: IModels[];
  color: {
    label: string;
    color: string;
  };
  folderUrl: string;
}
export interface IModels {
  size: string;
  id: string;
}
