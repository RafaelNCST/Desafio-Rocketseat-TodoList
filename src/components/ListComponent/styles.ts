import styled from "styled-components";

export const ListBody = styled.div`
  margin: 0 auto;
  width: 46rem;
  margin-top: ${({ theme }) => theme.spaces[16]};
`;

export const TextContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[4]};
`;

interface TextProps {
  colortext: string;
}

export const Text = styled.p<TextProps>`
  color: ${({ theme, colortext }) =>
    colortext === "PURPLE_DARK" ? theme.colors.PURPLE_DARK : theme.colors.BLUE};
  font-family: ${({ theme }) => theme.font_family.font};
  font-size: ${({ theme }) => theme.font_size.lg};
  font-weight: 700;
`;

interface CountContainerProps {
  widthcount: string;
}

export const CountContainer = styled.span<CountContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ widthcount }) => widthcount}rem;
  padding-left: ${({ theme }) => theme.spaces[2]};
  padding-right: ${({ theme }) => theme.spaces[2]};
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.GRAY_400};
  border-radius: ${({ theme }) => theme.border_radius.full};
`;

export const TextCount = styled.p`
  color: ${({ theme }) => theme.colors.WHITE};
  font-family: ${({ theme }) => theme.font_family.font};
  font-size: ${({ theme }) => theme.font_size.md};
  font-weight: bold;
`;

interface ListProps {
  isbordertop: boolean;
}

export const List = styled.ul<ListProps>`
  display: flex;
  margin-top: ${({ theme }) => theme.spaces[8]};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: ${({ theme, isbordertop }) =>
    isbordertop ? `1px solid ${theme.colors.GRAY_400}` : "none"};
  gap: ${({ theme }) => theme.spaces[2]};
  padding-bottom: ${({ theme }) => theme.spaces[10]};
`;

export const ContainerBlankList = styled.li`
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface TextBlankSpaceProps {
  isbold: boolean;
  ismargintop: boolean;
}

export const TextBlankSpace = styled.p<TextBlankSpaceProps>`
  color: ${({ theme }) => theme.colors.GRAY_300};
  font-family: ${({ theme }) => theme.font_family.font};
  line-height: ${({ theme }) => theme.line_height};
  font-size: ${({ theme }) => theme.font_size.md};
  font-weight: ${({ isbold }) => (isbold ? 700 : 300)};
  margin-top: ${({ theme, ismargintop }) =>
    ismargintop ? theme.spaces[4] : "0px"};
`;
