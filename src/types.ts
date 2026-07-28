export interface SupplierSample {
  id: string;
  name: string;
  category: 'maquiagem' | 'cosmeticos' | 'utilidades' | 'acessorios';
  location: string;
  minOrder: string;
  shipping: string;
  rating: number;
  verified: boolean;
  hasWhatsapp: boolean;
  hasWebsite: boolean;
  sampleProducts: string[];
}

export interface ProductMargin {
  id: string;
  name: string;
  category: string;
  costPrice: number;
  salePrice: number;
  salesPerDay: number;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
