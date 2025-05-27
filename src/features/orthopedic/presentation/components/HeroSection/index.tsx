import {
  Container,
  Overlay,
  LogoImage,
  ListItem,
  BreadcrumbWrapper,
  ContentWrapper,
} from './styles';
import heroLogo from '../../../../../assets/icons/logohero.svg';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import { Breadcrumb } from '../../../../../shared/ui/molecules/Breadcrumb';

export const HeroSection: React.FC = () => {
  return (
    <Container>
      <Overlay>
        <BreadcrumbWrapper>
          <Breadcrumb />
        </BreadcrumbWrapper>

        <ContentWrapper>
          <LogoImage src={heroLogo} alt="Linha Orthopedic" />
          <ListItem>
            <Text variant="paragraphLarge" color="#121212">
              Produtos desenvolvidos para auxiliar na prevenção e retorno das atividades, no
              tratamento e recuperação de pacientes com lesões ortopédicas.
            </Text>
          </ListItem>
        </ContentWrapper>
      </Overlay>
    </Container>
  );
};
