import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconPleasure = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/pleasure.png')}
      width={width}
      height={height}
    />
  );
};

export default IconPleasure;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
