import { useNavigate } from 'react-router-dom';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import { CardContainer, Image, Label, CodeWrapper } from './styles';
import type { Product } from '../../../share/entities/product';

interface ProductCardProps {
  product: Product;
}
interface ProductCardProps {
  product: Product;
  small?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, small = false }) => {
  const { name, id, images, isNew } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/produto/${product.id}`);
  };

  return (
    <CardContainer small={small} onClick={handleClick}>
      <Image image={images[0]} small={small}>
        {isNew && <Label>Lançamento</Label>}
      </Image>
      <Text variant="paragraphNormal" color="#121212">
        {name}
      </Text>
      <CodeWrapper>
        <Text variant="paragraphBold" color="#4C4D4C">
          Cód. Produto
        </Text>
        <Text variant="paragraphCaption" color="#4C4D4C">
          {id}
        </Text>
      </CodeWrapper>
    </CardContainer>
  );
};
