import { SearchWrapper, WrapperSeaarch } from './styles';
import search from '../../../../assets/icons/search.svg';

export const SearchIcon: React.FC = () => {
  return (
    <SearchWrapper>
      <WrapperSeaarch src={search} />
    </SearchWrapper>
  );
};
