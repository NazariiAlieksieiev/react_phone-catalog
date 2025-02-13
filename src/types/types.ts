export type Slide = {
  imgPathMobile: string;
  imgPathTablet: string;
  pathToOrder: string | null;
  backgroundColor: string;
};

export type ProductCategories = {
  categoryName: string;
  categoryBackground: string;
  categoryImg: string;
  categoryPath: string;
};

export type Product = {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};

export type Category = 'phones' | 'tablets' | 'accessories';
