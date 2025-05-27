import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, Viewport, Track, NavArrow } from './styles';
import type { RootState } from '../../../../../app/store';
import { ProductCard } from '../../../../orthopedic/presentation/components/ProductCard';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import { Row } from '../../../../../shared/ui/atoms/Row';
import { Margin } from '../../../../../shared/ui/atoms/Margin';

const CARD_WIDTH = 268 + 16;

export const ProductRelatedSection: React.FC = () => {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.orthopedic.products);
  const filtered = products.filter((p) => p.id !== id);

  const [scrollIndex, setScrollIndex] = useState(0);
  const maxScroll = Math.max(0, filtered.length - 4);

  const handleNext = () => {
    if (scrollIndex < maxScroll) setScrollIndex(scrollIndex + 1);
  };

  const handlePrev = () => {
    if (scrollIndex > 0) setScrollIndex(scrollIndex - 1);
  };

  return (
    <Wrapper>
      <Row justify="space-between">
        <Text variant="titleH2" fontSize={32}>
          Conheça também
          <br />
          nossos outros produtos
        </Text>
        <Row>
          <NavArrow direction="left" onClick={handlePrev} disabled={scrollIndex === 0}>
            ‹
          </NavArrow>
          <Margin width={16}></Margin>
          <NavArrow direction="right" onClick={handleNext} disabled={scrollIndex === maxScroll}>
            ›
          </NavArrow>
        </Row>
      </Row>

      <Viewport>
        <Track offset={scrollIndex * CARD_WIDTH}>
          {filtered.map((product) => (
            <ProductCard small key={product.id} product={product} />
          ))}
        </Track>
      </Viewport>
    </Wrapper>
  );
};
