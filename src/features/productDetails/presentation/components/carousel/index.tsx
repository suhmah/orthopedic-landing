import { useRef, useState } from 'react';
import { CarouselContainer, ThumbnailsTrack, ThumbnailImage, NavArrow, Viewport } from './styles';
import { Row } from '../../../../../shared/ui/atoms/Row';

interface CarouselProps {
  images: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const THUMB_WIDTH = 60 + 8; // width + gap

export const Carousel: React.FC<CarouselProps> = ({ images, selectedIndex, onSelect }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
 const visibleCount = 4

  const maxScroll = Math.max(0, images.length - visibleCount);

  const handleScrollNext = () => {
    setScrollIndex((prev) => {
      const next = prev + 1;
      return next > maxScroll ? maxScroll : next;
    });
  };

  const handleScrollPrev = () => {
    setScrollIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? 0 : next;
    });
  };

  return (
    <CarouselContainer>
      <Row justify="space-between" align="center">
        <NavArrow position="left" onClick={handleScrollPrev}>
          ‹
        </NavArrow>

        <Viewport ref={viewportRef}>
          <ThumbnailsTrack offset={scrollIndex * THUMB_WIDTH}>
            {images.map((img, index) => (
              <ThumbnailImage
                key={index}
                src={img}
                alt={`Miniatura ${index + 1}`}
                selected={index === selectedIndex}
                onClick={() => onSelect(index)}
              />
            ))}
          </ThumbnailsTrack>
        </Viewport>

        <NavArrow position="right" onClick={handleScrollNext} style={{ color: '#4C4D4C' }}>
          ›
        </NavArrow>
      </Row>
    </CarouselContainer>
  );
};
