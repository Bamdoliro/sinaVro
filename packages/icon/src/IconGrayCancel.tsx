import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconGrayCancel = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/grayCancel.png')}
      width={width}
      height={height}
    />
  );
};

export default IconGrayCancel;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
