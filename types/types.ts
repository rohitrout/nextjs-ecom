export interface ContextValue {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  addToCart: (item: any) => void;
  removeFromCart: (itemId: number) => void;
  decreaseFromCart: (itemId: number) => void;
}

export interface CartItemInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  cartQuantity: number;
}
