import styled from "styled-components";

export const FormContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[2]};
  margin-top: -${({ theme }) => theme.spaces[7]}; ;
`;

export const Input = styled.input`
  height: 3.375rem;
  width: 39.875rem;
  background-color: ${({ theme }) => theme.colors.GRAY_500};
  border-radius: ${({ theme }) => theme.border_radius.default};
  color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({theme}) => theme.colors.BLACK};
  padding-left: ${({ theme }) => theme.spaces[4]};
  font-family: ${({ theme }) => theme.font_family.font};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.GRAY_300};
  }
`;

export const ButtonCreate = styled.button`
  height: 3.25rem;
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.BLUE_DARK};
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  border-radius: ${({ theme }) => theme.border_radius.default};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[2]};
  font-size: ${({ theme }) => theme.font_family.font};
  font-weight: 700;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.BLUE};
  }
`
