import React from "react";
import UniFilm from '@iconscout/react-unicons/icons/uil-film';

const Watch = ({ link }) => {
  return(
   <div className="watchNow">
      <a href={link} target="_blank">
        <UniFilm />
      </a>
    </div>
  )
}

const HostGuest = ({host, guest}) => {
  return(
    <div className="hostGuest">
      <h3>Featuring:</h3>
      <p>{host}</p>
      <p>{guest}</p>
    </div>
  )
}

const VideoDescription = ({subtitle}) => {
  return (
    <div className="videoDescription">
      <p style={{textOverflow: "ellipsis"}}>{subtitle}</p>
    </div>
  )
}

export const Card = ({host, link, guest, title, subtitle}) => {
    return (
      <div className={"card"} key={"card"}>
        <h3 className="cardTitle">{title}</h3>
        <HostGuest  host={host} guest={guest} />
        <VideoDescription subtitle={subtitle} key={"data"} />
        <Watch link={link}  key={"watch"} />
      </div>
    )
}