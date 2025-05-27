import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../store/productDetailsSlice';

import type { RootState } from '../../../../app/store';
import { getProductById } from '../../usecases/getProductByid';
import { ProductGallery } from '../components/ProductGallery';
import { Container, Left, Right } from './styles';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';
import { Breadcrumb } from '../../../../shared/ui/molecules/Breadcrumb';
import { ProductVideoSection } from '../components/ProductVideoSection';
import { Row } from '../../../../shared/ui/atoms/Row';
import person from '../../../../assets/images/person.png';
import { Separator } from '../../../../shared/ui/atoms/Separator';
import { Margin } from '../../../../shared/ui/atoms/Margin';
import { ProductAccordion } from '../components/ProductAccordion';
import { ProductRelatedSection } from '../components/ProductRelatedSection';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.productDetails.currentProduct);

  useEffect(() => {
    if (id) {
      getProductById(id).then((p) => dispatch(setProduct(p)));
    }
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <Container>
      <Breadcrumb current={product.name} />
      <Margin height={32}></Margin>
      <Row align="start" justify="center" responsive breakpoint="1300" gap="40">
        <Left>
          <ProductGallery images={product.images} />
        </Left>
        <Right>
          <ProductInfo product={product} />
        </Right>
      </Row>
      <Margin height={48}></Margin>

      <ProductVideoSection videoUrl={product.videoUrl} />
      <Margin height={88}></Margin>

      <Row justify="center" style={{ padding: 180, paddingTop: 0, paddingBottom: 0 }}>
        <div>
          <img src={person} style={{ width: '100%' }}></img>
        </div>
      </Row>
      <Separator></Separator>
      <ProductAccordion />
      <Margin height={60}></Margin>
      <div>
        <ProductRelatedSection></ProductRelatedSection>
      </div>
    </Container>
  );
};
