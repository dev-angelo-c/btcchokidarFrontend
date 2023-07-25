import React from "react";
import Text from "../Text";
const parent = {
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: 'center',
  gap:'2em'
}

const item = {
  flex: `0 1 300px`,
  border: `1px solid red`,
  background: `lightpink`,
  fontSize: `2rem`,
  textAlign: `center`
}

export default () => {
  return (
    <div style={parent}>
      <div style={item}>
        <Text> Store </Text>
      </div>
      <div style={item}>
        <Text> Store </Text>
      </div>
      <div style={item}>
        <Text> Store </Text>
      </div>
      <div style={item}>
        <Text> Store </Text>
      </div>
      <div style={item}>
        <Text> Store </Text>
      </div>
      <div style={item}>
        <Text> Store </Text>
      </div>    
    </div>
  )
}