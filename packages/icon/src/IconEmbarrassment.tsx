import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconEmbarrassment = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/embarrassment.png')}
      width={width}
      height={height}
    />
  );
};

export default IconEmbarrassment;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
