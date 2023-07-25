import React from 'react';

export default ({children, onClick, style, direction="row" }) => {
  return(
    <div 
      onClick = { onClick }
      style= {{
        display: "flex",
        flexGrow: "1",
        direction: direction,
        justifyContent: "center",
        alignItems:"center",
        ...style        
      }}
    >
      {children}
    </div>
  )
};