import { useEffect, useState } from 'react';

import fetchProducts from '../api';
import Footer from '../footer';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
// eslint-disable-next-line import-helpers/order-imports
import StepsHeader from './StepsHeader';

import './styles.css';
import { OrderLocationData, Product } from './types';

const Order = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter((item) => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation onChangeLocation={(location) => setOrderLocation(location)} />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
        />
      </div>
      <Footer />
    </>
  );
};

export default Order;
