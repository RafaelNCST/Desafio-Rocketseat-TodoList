import { createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1200px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box; 
    }

    html, body {
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.colors.GRAY_600};
        font-size: 12px;
        -webkit-text-size-adjust: 100%;
        overflow-y: auto;
    }
`;
