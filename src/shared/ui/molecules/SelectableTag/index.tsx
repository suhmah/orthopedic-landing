// src/shared/ui/atoms/SelectableTag/index.tsx
import { useState } from 'react';
import { TagButton } from './styles';
import { Text } from '../../atoms/text/inde';

interface SelectableTagProps {
  label: string;
  onSelect?: (selected: boolean) => void;
}

export const SelectableTag: React.FC<SelectableTagProps> = ({ label, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    const newState = !selected;
    setSelected(newState);
    onSelect?.(newState);
  };

  return (
    <TagButton $selected={selected} onClick={handleClick}>
      <Text variant="paragraphNormal" color={selected ? '#F8F8F8' : '#80276C'}>
        {label}
      </Text>
    </TagButton>
  );
};
