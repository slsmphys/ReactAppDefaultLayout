import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import ContentBody from "./ContentBody";

const DefaultLayout = ({ title, contentApp }) => (
    <Fragment>
        <Header title={title} />
        <ContentBody contentApp={contentApp} />
    </Fragment>
);

DefaultLayout.propTypes = {
    title: PropTypes.string.isRequired,
    contentApp: PropTypes.object.isRequired,
};

export default DefaultLayout;
