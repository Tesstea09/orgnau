import React,{Component} from 'react'
import './Ent.css'
import back from './back.png'

class Info extends Component{
    render(){
        return(
            <div class = "info">
                <img src = {back}></img>
                <div class = "catname">
                    <p>Біологія</p>
                </div>
            </div>
        )
    }
}    
export default Info