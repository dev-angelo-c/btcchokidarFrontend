import React from "react";
import UniFilm from '@iconscout/react-unicons/icons/uil-film';
import PresentationColumn from "../ColumnDataContainer";


export default (props) => {
  return( 
    <PresentationColumn>
      <img src={props.src} />
    </PresentationColumn>
  )
}