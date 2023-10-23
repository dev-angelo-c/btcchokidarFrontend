import React, { useState } from 'react';
import FlexColumn from "../ColumnDataContainer";
import Text from "../Text";
import Image from "../Image";


export const ComingSoon = () => {
  return (
    <div>
      <p> This Feature is Coming Soon. Would you like to be notified of it's release?</p>
      <form action="/" method="post" enctype={"multipart/form-data"}>
        <input type="email" name="email" id="email" /> 
        <input type="submit" value="Notify Me!"/>
      </form>
    </div>
  )
}