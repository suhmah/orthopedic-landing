import { useState } from 'react';
import { MainImage, Wrapper } from './styles';
import { Carousel } from '../carousel';
import { Row } from '../../../../../shared/ui/atoms/Row';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import download from '../../../../../assets/icons/download.svg';

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Wrapper>
      <MainImage>
        <img src={images[selectedIndex]} alt={`Imagem ${selectedIndex + 1}`} />
      </MainImage>

      <Carousel images={images} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />

      <Row>
        <Text variant="paragraphNormal" color="#E57200">
          Baixar Folder do Produto
        </Text>
        <img src={download}></img>
      </Row>
    </Wrapper>
  );
};
