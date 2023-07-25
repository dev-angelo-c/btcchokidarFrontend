import React from "react";
//import PropTypes from 'prop-types';

const FlexColumn = ({ children, width="100%" }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: width,
    backgroundColor: "#f9f9f9",
    padding:"10px"
  };

  return <div style={style}>{children}</div>;
};

// FlexColumn.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default FlexColumn;
