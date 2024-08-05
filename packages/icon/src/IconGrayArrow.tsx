import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconGrayArrow = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/grayArrow.png')}
      width={width}
      height={height}
    />
  );
};

export default IconGrayArrow;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
