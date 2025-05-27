import styled from 'styled-components';
import { Text } from '../../../../../shared/ui/atoms/text/inde';

export const Container = styled.section`
  background-color: #fff;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 32px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
`;

export const Description = styled(Text)`
  max-width: 600px;
  color: #4c4d4c;
  line-height: 22px;
`;
