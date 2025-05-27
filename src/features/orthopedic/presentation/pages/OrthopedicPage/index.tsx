import { Margin } from '../../../../../shared/ui/atoms/Margin';
import { Separator } from '../../../../../shared/ui/atoms/Separator';
import { FamiliesSection } from '../../components/FamiliesSection';
import { HeroSection } from '../../components/HeroSection';
import { Pagination } from '../../components/Pagination';
import { ProductListSection } from '../../components/ProductListSection';
import { Main } from './styles';

export const OrthopedicPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Main>
        <FamiliesSection />
        <Margin height={32} />
        <Separator></Separator>
        <ProductListSection></ProductListSection>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={(page) => console.log('ir para página', page)}
        />
      </Main>
    </div>
  );
};
