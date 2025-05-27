import { useState } from 'react';
import { headerMenu } from '../../../constants/headerMenu';
import { Button } from '../../atoms/Button/inde';
import { FlagDropdown } from '../../atoms/FlagDropdown/inde';
import { Text } from '../../atoms/text/inde';
import logo from '../../../../assets/icons/logo.svg';
import menuIcon from '../../../../assets/icons/menu.svg';

import {
  HeaderContainer,
  Logo,
  Nav,
  Actions,
  MenuIcon,
  MobileMenu,
  DesktopOnly,
  MobileOnly,
} from './styles';
import { ExpandableSearch } from '../../molecules/ExpandableSearch';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <MobileOnly>
        <MenuIcon src={menuIcon} alt="Menu" onClick={() => setMenuOpen((prev) => !prev)} />
      </MobileOnly>

      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      <DesktopOnly>
        <Nav>
          {headerMenu.map((item) => (
            <a key={item.href} href={item.href}>
              <Text variant="paragraphNormal" color="#4C4D4C">
                {item.label}
              </Text>
            </a>
          ))}
          <ExpandableSearch></ExpandableSearch>
        </Nav>
      </DesktopOnly>

      <Actions>
        <Button variant="primary" label="Fale conosco" />
        <FlagDropdown />
      </Actions>

      {menuOpen && (
        <MobileMenu>
          {headerMenu.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <Text variant="paragraphNormal">{item.label}</Text>
            </a>
          ))}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};
