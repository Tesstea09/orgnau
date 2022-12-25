import React,{Component} from 'react'
import './Ent.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import logo from './logo.png'
class RegForm extends Component{
    render(){
        return(
            <div class = "main">
                <Header />
                <div class = "start">
                    <div id = "startF">
                        <h1>Реєстрація</h1>
                        <p>Вже є акаунт? <Link to="./EnterForm">Увійти</Link> </p>
                    </div>
                </div>
                <div id = "Reg"> </div>
                    <div id = "RegS">
                        <form action="" class = "RegForm">
                            <div class = "nam_sur">
                                <div>
                                    <label for="name" id = "name_l">Ім'я</label>
                                    <br></br>
                                    <input type="text" id = "name" placeholder='Ангеліна'></input>
                                    
                                </div>
                                <div>
                                    <label for="surname">Прізвище</label>
                                    <br></br>
                                    <input type="text" id = "surname" placeholder='Цезар'></input>
                                </div>
                            </div>
                            <label for="email">Електронна пошта</label><input type="text" id = "email" placeholder='email@gmail.com'></input>
                            <label for="company">Компанія/Заклад</label><input type="text" id = "company" placeholder='НАУ'></input>
                            <label for="password_r">Пароль</label><input type="text" id = "password_r" placeholder='**********'></input>
                            <label for="password_rr">Повторіть пароль</label><input type="text" id = "password_rr" placeholder='**********'></input>
                            <div id = "reg">
                                <button>Зареєструватися</button>   
                            </div>
                        </form>
                    </div>
                    <Footer/>
                </div>
        )
    }
}    
export default RegForm