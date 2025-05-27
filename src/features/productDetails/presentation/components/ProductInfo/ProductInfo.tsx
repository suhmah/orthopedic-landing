import { Margin } from '../../../../../shared/ui/atoms/Margin';
import { Row } from '../../../../../shared/ui/atoms/Row';
import { Separator } from '../../../../../shared/ui/atoms/Separator';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import type { Product } from '../../../../orthopedic/share/entities/product';
import { Elipse, Tag, Wrapper } from './styles';
import view from '../../../../../assets/icons/view.svg';
import ruler from '../../../../../assets/icons/ruler.svg';
import { Button } from '../../../../../shared/ui/atoms/Button/inde';

interface Props {
  product: Product;
}

export const ProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <Wrapper>
      <Text variant="paragraphNormalMedium">Hidrolight Neo®</Text>
      <div>
        <Text variant="titleH1">{product.name}</Text>
      </div>

      <Text variant="paragraphSmall">
        Código SKU {product.id} · Lado direito / Código SKU {product.id} · Lado esquerdo
      </Text>
      <Margin height={15}></Margin>

      <Text variant="paragraphNormal" color="#121212">
        Descrição
      </Text>
      <Text variant="paragraphNormal" color="#4C4D4C">
        {product.description}
      </Text>
      <Margin height={24}></Margin>

      <Text variant="paragraphNormal" color="#121212">
        Nível {product.detailsProduct.level}
      </Text>
      <Text variant="paragraphNormal" color="#4C4D4C">
        {product.detailsProduct.levelDescription}
      </Text>
      <Margin height={10}></Margin>
      <Separator></Separator>
      <Margin height={10}></Margin>

      <Row justify="start1" align="center">
        <Text variant="paragraphNormalRegular">Cores disponíveis:</Text>
        <Margin width={8}></Margin>
        <Elipse color={product.detailsProduct.color.color}></Elipse>
        <Margin width={5}></Margin>
        <Text variant="paragraphNormalMedium"> {product.detailsProduct.color.label}</Text>
        <Margin width={4}></Margin>
      </Row>

      <Row justify="">
        <Text variant="paragraphNormalRegular">Modelo:</Text>
        <Margin width={8}></Margin>
        <Text variant="paragraphNormalMedium">{product.detailsProduct.model}</Text>
      </Row>
      <Row>
        <Text variant="paragraphNormalRegular">Tamanhos disponíveis:</Text>
        <Margin width={8}></Margin>
        {product.detailsProduct.sizes.map((s, index) => (
          <>
            <Tag key={s.id}>
              <Text variant="paragraphNormalMedium">{s.size}</Text>
            </Tag>
            {index < product.detailsProduct.sizes.length - 1 && <Margin width={8} />}
          </>
        ))}
      </Row>
      <Row>
        <img src={view}></img>
        <Text color="#E57200" variant="paragraphNormal">
          Descubra o seu tamanho ideal
        </Text>
        <Margin width={17} height={17}></Margin>
        <img src={ruler}></img>
        <Text variant="paragraphNormal" color="#4C4D4C">
          {' '}
          Tabela
        </Text>
      </Row>
      <Margin height={10}></Margin>
      <Button label="Encontrar lojas online" variant="highlight"></Button>

      <Text variant="paragraphNormalMedium" underline>
        Gostou desse produto? <a href="/seja-vendedor">Seja um vendedor</a>
      </Text>
    </Wrapper>
  );
};
