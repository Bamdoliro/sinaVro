import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconHappiness = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/happiness.png')}
      width={width}
      height={height}
    />
  );
};

export default IconHappiness;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
