import React from 'react';

const Text = ({ as, font, children }) => {
  const Component = as;

  const style = {
    fontFamily: font
  };

  return <Component style={style}>{children}</Component>;
};

Text.defaultProps = {
  as: 'p',
  font: 'monospace',
  margin: 0,
  padding: 0,
};

export default Text;
