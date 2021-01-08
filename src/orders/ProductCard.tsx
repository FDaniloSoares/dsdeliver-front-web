import React from 'react';

import { Product } from './types';

type Props = {
  product: Product;
}

const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
};

const ProductCard = ({ product }: Props) => (
  <div className="order-card-container">
    <h3 className="order-card-title">
      {product.name}
    </h3>
    <img src={product.imageUri} alt={product.name} className="order-card-image" />
    <h3 className="order-card-price">
      {formatPrice(product.price)}
    </h3>
    <div className="order-card-description">
      <h3>Descrição</h3>
      <p>
        {product.description}
      </p>
    </div>
  </div>

);

export default ProductCard;