import React, { FC } from 'react';
import styles from './TemplateName.module.css';
import PropTypes from 'prop-types'

interface TemplateNameProps {
  children: React.Element | Array<React.Node | string>
  style?: object
}

/**
 * TemplateName component
 * @param {{}} props 
 * @returns React.Element
 */
const TemplateName: FC<TemplateNameProps> = (props) => (
  <div className={styles.TemplateName} data-testid="TemplateName" style={{ ...props.style }}>
    {props.children}
  </div>
);
TemplateName.propType = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object
}
TemplateName.defaultValues = {}
export default TemplateName;
