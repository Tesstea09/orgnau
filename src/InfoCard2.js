import React,{Component} from 'react'
import './Ent.css'
import price from "./currency-dollar-circle.svg"

class InfoCard2 extends Component{
    render(){
        return(
            <div class = "infocard">
                <img src = {price}></img>
                <p id = 'infoname'>Оргвнесок</p>
                <p id = 'infodate'>$7</p>
            </div>
        )
    }
}    
export default InfoCard2