/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
  product: Product;
  isSelected: boolean;
  // eslint-disable-next-line no-unused-vars
  onSelectProduct: (product: Product) => void;
}

const ProductCard = ({ product, isSelected, onSelectProduct }: Props) => (
  <div
    className={`order-card-container ${isSelected ? 'selected' : ''}`}
    onClick={() => onSelectProduct(product)}
  >
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
