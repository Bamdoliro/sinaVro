import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconCheck = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/check.png')} width={width} height={height} />
  );
};

export default IconCheck;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
