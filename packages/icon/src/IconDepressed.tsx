import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconDepressed = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/depressed.png')}
      width={width}
      height={height}
    />
  );
};

export default IconDepressed;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
