import React,{Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegForm from './RegForm'
import './Ent.css'
class EnterForm extends Component{
    render(){
        return(
            <div class = "main">
            <div class = "start">
                <div class = "startF">
                    <h1>Увійти</h1> 
                    <Link to = '/RegForm'>
                        <p>Ще не створили акаунт? <span>Реєстрація</span> </p>
                    </Link>
                </div>
            </div>
            <div class = "Ent"> </div>
                <div class = "EntS">
                    <form action="" name ="EntF" class = "EntForm">
                        <label for="email">Електронна пошта</label><input type="text" placeholder='email@gmail.com'></input>
                        <label for="password">Пароль</label><input type="password" placeholder='*********'></input>
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