import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconLetter = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/letter.png')} width={width} height={height} />
  );
};

export default IconLetter;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
