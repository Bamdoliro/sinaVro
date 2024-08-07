import { ReactNode } from 'react';
import { TextProps, Text, TextStyle } from 'react-native';
import { font } from '../../../design-token';
import styled, { css } from 'styled-components/native';

type Font = keyof typeof font;

interface Props extends Omit<TextProps, 'style'> {
  children: ReactNode;
  color?: string;
  fontType: Font;
  width?: number;
  ellipsis?: boolean;
  style?: TextStyle;
}

const CustomText = ({
  children,
  color,
  fontType,
  width,
  ellipsis = false,
  ...rest
}: Props) => {
  return (
    <StyledText
      style={{ color, width }}
      fontType={fontType}
      ellipsis={ellipsis}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;

const StyledText = styled(Text)<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => font[fontType]}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
