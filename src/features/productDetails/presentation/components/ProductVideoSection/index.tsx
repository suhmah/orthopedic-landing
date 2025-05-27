import { useState } from 'react';
import {
  SectionWrapper,
  VideoWrapper,
  PlayButton,
  HighlightText,
  StyledIframe,
  ThumbnailImage,
} from './styles';
import { Text } from '../../../../../shared/ui/atoms/text/inde';
import playvideo from '../../../../../assets/images/playvideo.png';
import play from '../../../../../assets/icons/play.svg';

interface Props {
  videoUrl: string;
}

export const ProductVideoSection: React.FC<Props> = ({ videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <SectionWrapper>
      <VideoWrapper>
        {showVideo ? (
          <StyledIframe
            src={videoUrl}
            title="Vídeo do Produto"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <ThumbnailImage src={playvideo} alt="Capa do vídeo" />
            <PlayButton onClick={() => setShowVideo(true)}>
              <img src={play}></img>
            </PlayButton>
          </>
        )}
      </VideoWrapper>

      <Text variant="paragraphNormalMedium" fontSize={32}>
        Fabricação <HighlightText>própria</HighlightText> e nacional. <br />
        <HighlightText>Qualidade</HighlightText> garantida!
      </Text>
      <Text variant="paragraphNormal" fontSize={16} color="#707372">
        Antes de utilizar o produto, leia atentamente as<br></br>precauções e instruções de uso.
      </Text>
    </SectionWrapper>
  );
};
