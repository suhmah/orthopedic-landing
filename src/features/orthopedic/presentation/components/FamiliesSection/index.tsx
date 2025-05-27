import { Container, TitleWrapper, TagsWrapper } from './styles';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import { Highlight } from '../../../../../shared/ui/atoms/Highlight';
import { SelectableTag } from '../../../../../shared/ui/molecules/SelectableTag';

const families = [
  'Hidrolight Neo®',
  'Comfort Air®',
  'Ortho Recovery®',
  'Air Flex®',
  'Softline®',
  'Foot Care®',
  'Lean®',
];

export const FamiliesSection: React.FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <Text variant="titleH2" as="h2">
          Conheça as <Highlight>famílias exclusivas</Highlight>
          <br />
          da linha Orthopedic
        </Text>
      </TitleWrapper>

      <TagsWrapper>
        {families.map((family) => (
          <SelectableTag key={family} label={family} />
        ))}
      </TagsWrapper>

      <Text variant="paragraphRegular" as="p">
        Família voltada para extrair os benefícios do Neoprene. <br />
        Propriedades térmicas, compressivas e elásticas: são essas três <br /> propriedades que
        fazem do Neoprene uma ferramenta eficaz no <br />
        tratamento e prevenção de lesões no tratamento ortopédico.
      </Text>
    </Container>
  );
};
