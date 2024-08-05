import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconBlackCancel = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/blackCancel.png')}
      width={width}
      height={height}
    />
  );
};

export default IconBlackCancel;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
