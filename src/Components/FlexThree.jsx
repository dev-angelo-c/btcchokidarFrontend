import React from 'react';

export default ({direction="row", children, thick=12, height=20, width=20}) => {
  
  return(
    <div style={{
      display: "flex",
      flexGrow: "3",
      justifyContent: "center",
      alignItems:"center",
      flexDirection: direction
    }}>
      {children}
    </div>
  )
};