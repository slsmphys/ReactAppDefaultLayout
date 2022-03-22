import React from "react";
import PropTypes from "prop-types";

import HeaderStyled from "./HeaderStyled";

const Header = ({ title }) => (
    <HeaderStyled>
        <h1>{title}</h1>
    </HeaderStyled>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
