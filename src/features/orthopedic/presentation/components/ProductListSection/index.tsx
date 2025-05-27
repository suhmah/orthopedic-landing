import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  ProductsGrid,
  MobileHeader,
  FilterButton,
  SearchWrapper,
  Sidebar,
  Overlay,
} from './styles';
import { ProductCard } from '../ProductCard';
import { ProductHeader } from '../ProductHeader';
import { FilterSection } from '../FilterSection';
import searchIcon from '../../../../../assets/icons/search.svg';
import filterIcon from '../../../../../assets/icons/filter.svg';
import type { RootState } from '../../../../../app/store';

const ITEMS_PER_PAGE = 8;

export const ProductListSection: React.FC = () => {
 const currentPage = 1;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const products = useSelector((state: RootState) => state.orthopedic.products);

  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <Container>
      <MobileHeader>
        <SearchWrapper>
          <img src={searchIcon} alt="Buscar" />
        </SearchWrapper>
        <FilterButton onClick={() => setSidebarOpen(true)}>
          <img src={filterIcon} alt="Abrir Filtros" />
        </FilterButton>
      </MobileHeader>

      {isSidebarOpen && (
        <>
          <Overlay onClick={() => setSidebarOpen(false)} />
          <Sidebar>
            <div>
              <FilterSection />
            </div>
          </Sidebar>
        </>
      )}

      <div className="filters-desktop">
        <FilterSection />
      </div>

      <div style={{ flex: 1, paddingLeft: 24 }}>
        <ProductHeader total={products.length} />
        <ProductsGrid>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </div>
    </Container>
  );
};
