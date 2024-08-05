import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconBlackBell = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/blackBell.png')}
      width={width}
      height={height}
    />
  );
};

export default IconBlackBell;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
