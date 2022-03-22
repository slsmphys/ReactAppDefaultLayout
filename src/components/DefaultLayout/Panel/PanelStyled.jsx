import styled from "styled-components";

import { breakpoint, defaultLayout } from "../../../theme";

const {
    headerHeight,
    panelBackgroundColor,
    panelBorderRadius,
    panelBoxShadow,
    panelDesktopHeight,
    panelDesktopMaxWidth,
    panelDesktopMaxHeight,
    panelDesktopMinHeight,
    panelMargin
} = defaultLayout;

const { mobile: panelMobileMargin, desktop: panelDesktopMargin } = panelMargin;

const PanelStyled = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background-color: ${panelBackgroundColor};
    margin: ${panelMobileMargin.top} ${panelMobileMargin.right} ${panelMobileMargin.bottom} ${panelMobileMargin.left};
    border-radius: ${panelBorderRadius};
    box-shadow: ${panelBoxShadow};
    min-height: calc(100vh - calc(${headerHeight.mobile} + ${panelMobileMargin.left} + ${panelMobileMargin.right}));

    @media screen and (min-width: ${breakpoint}) {
        height: ${panelDesktopHeight};
        margin: ${panelDesktopMargin.top} ${panelDesktopMargin.right} ${panelDesktopMargin.bottom} ${panelDesktopMargin.left};
        max-width: ${panelDesktopMaxWidth};
        max-height: ${panelDesktopMaxHeight};
        min-height: ${panelDesktopMinHeight};
    }
`;

export default PanelStyled;
