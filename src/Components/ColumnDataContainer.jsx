import React from "react";
//import PropTypes from 'prop-types';

const FlexColumn = ({style, children, width="100%" }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    width: width,
    backgroundColor: "#f9f9f9",
    padding:"10px",
    ...style
  };

  return <div style={styles}>{children}</div>;
};

// FlexColumn.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default FlexColumn;
