import styled from 'styled-components';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import { SearchIcon } from '../../../../../shared/ui/atoms/SearchIcon';
import { Button } from '../../../../../shared/ui/atoms/Button/inde';
import { Row } from '../../../../../shared/ui/atoms/Row';
import { Margin } from '../../../../../shared/ui/atoms/Margin';
import download from '../../../../../assets/icons/downloadLight.svg';
import { ExpandableSearch } from '../../../../../shared/ui/molecules/ExpandableSearch';

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
  gap: 12px;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductsCount = styled.div`
  background-color: #f8f8f8;
  padding: 8px 16px;
  border-radius: 8px;
`;

const SearchWrapper = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ProductHeader: React.FC<{ total: number }> = ({ total }) => {
  return (
    <Wrapper>
      <Row justify="space-between" style={{ width: '100%' }}>
        <Row>
          <ProductsCount>
            <Text variant="paragraphBold">{total} produtos</Text>
          </ProductsCount>
          <Margin width={21}></Margin>
          <SearchWrapper>
            <ExpandableSearch></ExpandableSearch>
          </SearchWrapper>
        </Row>
        <Button variant="highlight" label="Baixar Catálogo">
          <Margin width={4}></Margin>
          <img src={download}></img>
        </Button>
      </Row>
    </Wrapper>
  );
};
