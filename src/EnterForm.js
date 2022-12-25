import React,{Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegForm from './RegForm'
import './Ent.css'
class EnterForm extends Component{
    constructor(props){

    }
    identity(obj){

    }
    render(){
        return(
            <div class = "main">
            <div class = "start">
                <div id = "startF">
                    <h1>Увійти</h1> 
                    <Link to = '/RegForm'>
                        <p>Ще не створили акаунт? <span>Реєстрація</span> </p>
                    </Link>
                </div>
            </div>
            <div id = "Ent"> </div>
                <div id = "EntS">
                    <form action="" name ="EntF" id = "EntForm">
                        <label for="email">Електронна пошта</label><input type="text" id = "email"></input>
                        <label for="password">Пароль</label><input type="text" id = "password"></input>
                        <a href="" id = "forget">Забули пароль?</a>
                        <div id="enter">
                        <button>Увійти</button>
                        </div> 
                    </form>
                </div> 
            </div>
        )
    } 
}  
export default EnterForm