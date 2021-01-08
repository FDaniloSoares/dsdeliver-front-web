import React, { useEffect, useState } from 'react';

import fetchProducts from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
// eslint-disable-next-line import-helpers/order-imports
import StepsHeader from './StepsHeader';

import './styles.css';
import { OrderLocationData, Product } from './types';

const Order = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={(location) => setOrderLocation(location)} />
    </div>
  );
};

export default Order;
