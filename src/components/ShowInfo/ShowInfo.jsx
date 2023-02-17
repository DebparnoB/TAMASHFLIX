import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import React from 'react'
import "./ShowInfo.scss"

export default function ShowInfo({description, url, title}) {
  return (
    <div className="info">
        <div className="show-pic">
            <img src={url} alt="Not found"/>
            <span>{title}</span>
        </div>
        <span className="desc">
            {description}
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more-info">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
    </div>
  )
}