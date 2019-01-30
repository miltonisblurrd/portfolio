

import React from 'react'
import './InfoGroup.css'


const InfoGroup = props =>  (
    <div className="Group">
    <div className="InfoSub">
    <h3> {props.title} </h3>
    <div className="InfoGroup">
        <p> {props.text} </p>
    <div className="InfoImage">
        <img src={props.image} />
    </div>
    </div>
    </div>
</div>
)

export default InfoGroup 