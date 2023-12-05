import React from "react";
import PropTypes from "prop-types";

/**
 * TemplateName component
 * @param {{children:object}} props
 * @returns React.Element
 */
const TemplateName = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName" style={props.style}>
      {props.children}
    </div>
  );
};

TemplateName.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};
TemplateName.defaultValues = {};
export default TemplateName;
