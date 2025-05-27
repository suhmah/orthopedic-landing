import { useState } from 'react';
import { AccordionWrapper, Section, Header, Content } from './styles';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import arrow from '../../../../../assets/icons/arrowDown.svg';

const sections = [
  {
    title: 'Especificações técnicas',
    content: 'Aqui vão as especificações técnicas detalhadas do produto...',
  },
  {
    title: 'Indicações e Instrução de uso',
    content: 'Informações sobre indicações e como usar corretamente o produto...',
  },
  {
    title: 'Garantia',
    content: 'Detalhes sobre a garantia oferecida para este produto.',
  },
];

export const ProductAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionWrapper>
      {sections.map((section, index) => (
        <Section key={index}>
          <Header onClick={() => toggleSection(index)}>
            <Text variant="paragraphNormalMedium">{section.title}</Text>
            <img src={arrow}></img>
          </Header>

          <Content isOpen={openIndex === index}>
            <Text variant="paragraphNormalRegular">{section.content}</Text>
          </Content>
        </Section>
      ))}
    </AccordionWrapper>
  );
};
