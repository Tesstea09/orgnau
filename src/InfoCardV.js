import React, { Component } from 'react'
import './Ent.css'
import date from "./calendar.svg"

class InfoCardV extends Component {
    render() {
        return (
            <div class="infocard">
                <img src={date}></img>
                <p id='infoname'>Термін подання тез та оргвнесків (включно)</p>
                <p id='infodate'>до 11 грудня</p>
            </div>
        )
    }
}
export default InfoCardV