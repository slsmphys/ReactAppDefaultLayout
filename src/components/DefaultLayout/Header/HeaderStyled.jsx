import styled from "styled-components";

import { breakpoint, defaultLayout } from "../../../theme";

const { headerBackgroundColor, headerFontFamily, headerFontSize, headerFontWeight, headerHeight, headerTextColor } = defaultLayout;

const HeaderStyled = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: ${headerHeight.mobile};
    background-color: ${headerBackgroundColor};

    @media screen and (min-width: ${breakpoint}) {
        height: ${headerHeight.desktop};
    }
    
    h1 {
        flex-wrap: nowrap;
        line-height: 1;
        font-family: ${headerFontFamily};
        font-weight: ${headerFontWeight};
        font-size: ${headerFontSize.mobile};
        color: ${headerTextColor};

        @media screen and (min-width: ${breakpoint}) {
            font-size: ${headerFontSize.desktop};
        }
    }
`;

export default HeaderStyled;
