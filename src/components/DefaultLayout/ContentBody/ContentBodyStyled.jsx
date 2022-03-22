import styled from "styled-components";

import { breakpoint, defaultLayout } from "../../../theme";

const { backgroundColor, headerHeight } = defaultLayout;

const ContentBodyStyled = styled.div`
    display: flex;
    width: 100%;
    background-color: ${backgroundColor};
    min-height: calc(100vh - ${headerHeight.mobile});


    @media screen and (min-width: ${breakpoint}) {
        min-height: calc(100vh - ${headerHeight.desktop}) ;
    }
`;

export default ContentBodyStyled;
