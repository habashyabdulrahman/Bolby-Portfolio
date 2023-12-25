import React from 'react'
import Data from './Data'
import './resume.css'

const Card = (props) => {
  return (
    <div className="timeline-item">
        <i className={props.icon}></i>
        <span className="timeline-data">{props.year}</span>
        <h3 className="timeline-title">{props.title}</h3>
        <p className="timeline-text">{props.desc}</p>
    </div>
  )
}

export default Card