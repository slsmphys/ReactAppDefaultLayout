import React from "react";
import PropTypes from "prop-types";

import Panel from "../Panel"

import ContentBodyStyled from "./ContentBodyStyled";

const ContentBody = ({ contentApp }) => (
    <ContentBodyStyled>
        <Panel>
            {contentApp}
        </Panel>
    </ContentBodyStyled>
);

ContentBody.propTypes = {
    contentApp: PropTypes.object.isRequired,
}

export default ContentBody;
