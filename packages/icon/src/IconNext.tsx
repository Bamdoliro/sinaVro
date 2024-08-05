import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconNext = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/next.png')} width={width} height={height} />
  );
};

export default IconNext;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
