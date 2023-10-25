import React from "react";
import Text from "./Text";
import UniFilm from '@iconscout/react-unicons/icons/uil-film';
import PresentationColumn from "./ColumnDataContainer";

const Watch = ({ link, order }) => {
  return(
   <div className="watchNow">
      <a href={link} target="_blank">
        <UniFilm />
      </a>
    </div>
  )
}


const Data = ({title, host, guest, text}) => {
  return (
    <PresentationColumn>
      <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
        <Text as="h3">{title}</Text>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', flexGrow: 2}}>
        {host && <Text as="p">{`Host: ${host} `}</Text> }
        {guest && <Text as="p">{`Guest: ${guest} `}</Text>}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', flexGrow: 2}}>
        {text && <Text>{text}</Text>}
      </div>
    </PresentationColumn>
  )
}

export const Card = ({host, link, guest, title, text}) => {
    return (
      <div className={"card"} key={"card"}>
        <Data title={title} host={host} guest={guest} text={text} key={"data"} />
        <Watch link={link}  key={"watch"} />
      </div>
    )
}