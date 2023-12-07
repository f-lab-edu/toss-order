export {};

declare global {
  type ItemT = {
    imageSrc: string;
    name: string;
    price: { defaultPrice: number };
  };

  type BasketItemT = {
    count: number;
    name: string;
    order: number;
    price: number;
    totalPrice: number;
  };

  type BasketItemsT = { [key: string]: BasketItemT } & {
    sumCount: number;
    sumPrice: number;
  };

  type OrderHistoryItemT = {
    count: number;
    id: string;
    name: string;
    // orderedTime: string;
    order: number;
    price: number;
    totalPrice: number;
  };

  type OrderHistoryItemsT = { [key: string]: OrderHistoryItemT } & {
    sumPrice: number;
  };

  type MenuItemT = {
    category: string;
    detail: string;
    imageSrc: string;
    name: string;
    order: number;
    price: { defaultPrice: number };
  };

  type MenuItemsT = {
    [key: string]: MenuItemT;
  };

  type MenuItemsStoreT = {
    [key: string]: {
      category: string;
      detail: string;
      imageSrc: string;
      name: string;
      order: number;
      price: { defaultPrice: number };
    };
  };

  type FooterT = {
    onClose: () => void;
    onConfirm: () => void;
  };

  type MenuCategoriesT = {
    [key: string]: {
      id: string;
    };
  };

  type ModalNamesT = 'basket' | 'confirm' | 'bill' | 'menuDetail';

  type PrimaryCTAButtonT = {
    className?: string;
    count?: number;
    onClick: () => void;
    price: number;
    text: string;
  };

  type ItemImageT = {
    alt: string;
    src: string;
  };

  type ItemPropsT = {
    id: string;
    imageSrc: string;
    name: string;
    price: { defaultPrice: number };
  };

  type ItemTextT = {
    name: string;
    price: { [key: string]: number };
  };

  type AddItemToBasketButtonT = {
    onClick: () => void;
    quantity: number;
  };

  type MenuDetailItemPropsT = {
    detail: string;
    imageSrc: string;
    name: string;
    price: { defaultPrice: number };
  };

  type MenuDetailTextT = {
    detail: string;
    name: string;
    price: { [key: string]: number };
  };
}
