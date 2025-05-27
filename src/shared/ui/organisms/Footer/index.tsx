import React from 'react';
import {
  Container,
  TopSection,
  Column,
  BottomSection,
  CountrySelector,
  Copyright,
  Logo,
  ContactRow,
  Icon,
  SocialIcons,
} from './styles';

import { Text } from '../../atoms/text/inde';
import { footerContent } from '../../../constants/footerContent';
import logo from '../../../../assets/icons/logo.svg';

import youtube from '../../../../assets/icons/youtube.svg';
import face from '../../../../assets/icons/face.svg';
import insta from '../../../../assets/icons/insta.svg';
import phone from '../../../../assets/icons/phone.svg';
import mail from '../../../../assets/icons/mail.svg';

const iconMap: Record<string, string> = {
  youtube,
  facebook: face,
  instagram: insta,
  phone,
  mail,
};

export const Footer: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <Logo src={logo} alt="Logo" />

        {footerContent.columns.map((col, i) => (
          <Column key={i}>
            <Text as="h4" variant="paragraphBold" color="#FFFFFF">
              {col.title}
            </Text>

            {col.items.map((item: any, j) => {
              if (typeof item === 'string') {
                return (
                  <div style={{ cursor: 'pointer' }}>
                    <Text key={j} as="span" variant="paragraphNormal" color="#EBEBEB">
                      {item}
                    </Text>
                  </div>
                );
              }

              if (item.icon === 'phone' || item.icon === 'mail') {
                return (
                  <ContactRow key={j}>
                    <Icon src={iconMap[item.icon]} alt={item.icon} size={20} />
                    <Text variant="paragraphNormal" color="#EBEBEB">
                      {item.label}
                    </Text>
                  </ContactRow>
                );
              }

              return (
                <Text key={j} variant="paragraphNormal" color="#EBEBEB">
                  {item.label}
                </Text>
              );
            })}

            {i === footerContent.columns.length - 1 && (
              <SocialIcons>
                {footerContent.social.map((icon, i) => (
                  <Icon key={i} src={iconMap[icon]} alt={icon} size={20} />
                ))}
              </SocialIcons>
            )}
          </Column>
        ))}
      </TopSection>

      <BottomSection>
        <Text variant="paragraphNormal">
          <CountrySelector>{footerContent.countrySelector}</CountrySelector>
        </Text>

        <Text variant="paragraphNormal" color="#EBEBEB">
          <Copyright>{footerContent.copyright}</Copyright>
        </Text>
      </BottomSection>
    </Container>
  );
};
