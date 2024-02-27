 export interface ReceipyCardType {
    name: string;
    description: string;
    price: string;
    serial: number;
  }
  
 export interface ItemsType {
    category: string;
    items: Array<ReceipyCardType>;
  }
  
 export interface ReceipyCardProps {
    items: ItemsType;
    keyGenerator: () => number;
  }