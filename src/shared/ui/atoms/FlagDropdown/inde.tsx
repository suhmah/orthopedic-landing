import { Wrapper, FlagIcon, Select, ArrowIcon } from './styles';
import brazil from '../../../../assets/icons/brazil.svg';
import arrowDown from '../../../../assets/icons/arrowDown.svg';

export const FlagDropdown: React.FC = () => {
  return (
    <Wrapper>
      <FlagIcon src={brazil} alt="Brazil Flag" />
      <ArrowIcon src={arrowDown} alt="Arrow Down" />
      <Select defaultValue="pt-br">
        <option value="pt-br">pt</option>
        <option value="en-us">en</option>
        <option value="es-es">es</option>
      </Select>
    </Wrapper>
  );
};
