export interface ReceipyCardType {
  name: string;
  description: string;
  price?: string;
  serial: number;
  specialPrice?: string;
  extraSpecialPrice?: string;
}

export interface ItemsType {
  category: string;
  items: Array<ReceipyCardType>;
}

export interface ReceipyCardProps {
  category: string;
  items: ItemsType;
  keyGenerator: () => number;
}
