import { useState, useRef, useEffect } from 'react';
import { SearchWrapper, Input, IconButton, InputWrapper } from './styles';
import { SearchIcon } from '../../atoms/SearchIcon';
import searchHigh from '../../../../assets/icons/searchHilight.svg';
import { Margin } from '../../atoms/Margin';

export const ExpandableSearch = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <SearchWrapper open={open}>
      {!open && (
        <IconButton onClick={toggleOpen}>
          <SearchIcon></SearchIcon>
        </IconButton>
      )}
      {open && (
        <InputWrapper onClick={toggleOpen}>
          <img src={searchHigh}></img>
          <Margin width={10}></Margin>
          <Input ref={inputRef} type="text" placeholder="Buscar por produtos, palavras..." />
        </InputWrapper>
      )}
    </SearchWrapper>
  );
};
