import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconEmptyMailBox = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/emptyMailBox.png')}
      width={width}
      height={height}
    />
  );
};

export default IconEmptyMailBox;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
