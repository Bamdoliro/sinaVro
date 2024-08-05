import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconAmazed = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/amazed.png')} width={width} height={height} />
  );
};

export default IconAmazed;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
