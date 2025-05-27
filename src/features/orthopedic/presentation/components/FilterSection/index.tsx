import { useState } from 'react';
import {
  Container,
  FilterGroup,
  FilterHeader,
  DropdownContent,
  Arrow,
  WrappetText,
} from './styles';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import dropDown from '../../../../../assets/icons/arrowDown.svg';
import { filtersData } from '../../../../../shared/constants/filters.json';

export const FilterSection: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpen((prev) => (prev === key ? null : key));
  };

  return (
    <Container>
      <WrappetText>
        <Text variant="paragraphNormal">Filtros</Text>
      </WrappetText>

      {filtersData.map((filter) => (
        <FilterGroup key={filter.key} onClick={() => toggle(filter.key)}>
          <FilterHeader>
            <Text variant="paragraphNormal">{filter.label}</Text>
            <Arrow isOpen={open === filter.key}>⌄</Arrow>
            <img src={dropDown} />
          </FilterHeader>
          {open === filter.key && (
            <DropdownContent>
              {filter.options.map((option, index) => (
                <label key={index}>
                  <input type="checkbox" /> {option}
                </label>
              ))}
            </DropdownContent>
          )}
        </FilterGroup>
      ))}
    </Container>
  );
};
