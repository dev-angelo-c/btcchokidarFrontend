import React from "react";
//import PropTypes from 'prop-types';

const FlexColumn = ({style, children, bgHex="#f9f9f9" }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: bgHex,
    ...style
  };

  return <div style={styles}>{children}</div>;
};

// FlexColumn.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default FlexColumn;
