import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconPrevious = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/previous.png')}
      width={width}
      height={height}
    />
  );
};

export default IconPrevious;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
