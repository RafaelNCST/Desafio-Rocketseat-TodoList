import styled from "styled-components";

export const BodyScreen = styled.div``;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  height: 12.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[4]};
`;

interface ImageProps {
  heightimage: number;
  widthImage: number;
}

export const Image = styled.img<ImageProps>`
  height: ${({ heightimage }) => heightimage}rem;
  width: ${({ widthImage }) => widthImage}rem;
  color: red;
`;

export const TextContainer = styled.span`
  display: flex;
  flex-direction: row;
`;

interface TextProps {
  colortext: string;
}

export const Text = styled.p<TextProps>`
  color: ${({ theme, colortext }) =>
    colortext === "PURPLE_DARK" ? theme.colors.PURPLE_DARK : theme.colors.BLUE};
  font-family: "Inter";
  font-size: ${({ theme }) => theme.font_size.xl5};
  font-weight: bold;
`;
