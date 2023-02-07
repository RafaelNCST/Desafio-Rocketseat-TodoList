import styled from "styled-components";

interface ListItemStyledProps {
  isMark: boolean;
}

export const ListItemStyled = styled.li<ListItemStyledProps>`
  min-height: 4.5rem;
  background-color: ${({ theme }) => theme.colors.GRAY_500};
  width: 100%;
  list-style: none;
  border-radius: ${({ theme }) => theme.border_radius.default};
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spaces[5]};

  p {
    display: flex;
    flex: 1;
    margin-left: ${({ theme }) => theme.spaces[6]};
    color: ${({ theme, isMark }) =>
      isMark ? theme.colors.GRAY_300 : theme.colors.WHITE};
    font-family: ${({ theme }) => theme.font_family.font};
    line-height: ${({ theme }) => theme.line_height};
    font-size: ${({ theme }) => theme.font_size.sm};
    font-weight: 400;
    margin-right: ${({ theme }) => theme.spaces[6]};
    flex-wrap: wrap;
    text-align: justify;
    text-decoration: ${({ isMark }) => (isMark ? "line-through" : "none")};
    word-break: break-all;
  }

  button {
    background-color: transparent;
    border: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const CheckCircle = styled.label`
  position: relative;
  width: 1.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    :checked ~ span {
      background-color: ${({ theme }) => theme.colors.PURPLE_DARK};
      border: none;
    }

    :checked ~ span:hover {
      background-color: ${({ theme }) => theme.colors.PURPLE};
    }
  }

  span {
    position: absolute;
    top: -10px;
    left: 0;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.border_radius.full};
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.BLUE};
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      border-color: ${({ theme }) => theme.colors.BLUE_DARK};
    }
  }
`;
