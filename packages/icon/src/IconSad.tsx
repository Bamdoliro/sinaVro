import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconSad = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/sad.png')} width={width} height={height} />
  );
};

export default IconSad;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
