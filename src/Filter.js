import React,{Component} from 'react'
import './Ent.css'
import filter from "./filterimg.png"

class Filter extends Component{
    render(){
        return(
            <div class = "filtercard">
                <div class ="filterdesc">
                    <img src={filter}></img>
                    <h1 class = "filtertext">Біологія</h1>
                </div>
                <input type="checkbox" id="custom-radio"></input>
                

            </div>
        )       
    }
}
export default Filter