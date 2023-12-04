import React from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";

const TemplateName = (props) => (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);
TemplateName.propTypes = {};

TemplateName.defaultProps = {};
export const TemplateNameConnected = (props) => {
  const d = useDispatch();
  const storeData = useSelector((s) => s);
  return <TemplateName {...props} {...storeData} fn={() => d()} />;
};

export default TemplateName;
