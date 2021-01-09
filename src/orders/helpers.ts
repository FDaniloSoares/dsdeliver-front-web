/* eslint-disable implicit-arrow-linebreak */
import { Product } from './types';

export const checkIsSelected = (selectedProducts: Product[], product: Product) =>
  selectedProducts.some((item) => item.id === product.id);
export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
};
