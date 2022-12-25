import React,{Component} from 'react'
import './Ent.css'
import calendar from "./calendar-check-02.svg"

class InfoCardV extends Component{
    render(){
        return(
            <div class = "infocard">
                <img src = {calendar}></img>
                <p id = 'infoname'>Розміщення матеріалів конференції та на сайті</p>
                <p id = 'infodate'>13 грудня</p>
            </div>
        )
    }
}    
export default InfoCardV