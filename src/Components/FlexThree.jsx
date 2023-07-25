import React from 'react';

export default ({children, thick=12, height=20, width=20}) => {
  
  return(
    <div style={{
      display: "flex",
      flexGrow: "3",
      justifyContent: "center",
      alignItems:"center"
    }}>
      {children}
    </div>
  )
};