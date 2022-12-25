import React,{Component} from 'react'
import './Ent.css'
import './Footer.js'
import logo from './logo.png'
class RegForm extends Component{
    render(){
        return(
                <div class = "main">
                <div class = 'header'>
                        <img src={logo} alt=""></img>
                        <form action="" id="f">
                            <input type="text" placeholder="Пошук" id="search"></input>
                        </form>
                </div>
                <div class = "start">
                    <div id = "startF">
                        <h1>Реєстрація</h1>
                        <p>Вже є акаунт? <a href="">Увійти</a> </p>
                    </div>
                </div>
                <div id = "Reg"> </div>
                    <div id = "RegS">
                        <form action="" class = "RegForm">
                            <div class = "nam_sur">
                                <div>
                                    <label for="name" id = "name_l">Ім'я</label>
                                    <br></br>
                                    <input type="text" id = "name"></input>
                                    
                                </div>
                                <div>
                                    <label for="surname">Прізвище</label>
                                    <br></br>
                                    <input type="text" id = "surname"></input>
                                </div>
                            </div>
                            <label for="email">Електронна пошта</label><input type="text" id = "email" placeholder='Meh'></input>
                            <label for="company">Компанія/Заклад</label><input type="text" id = "company"></input>
                            <label for="password_r">Пароль</label><input type="text" id = "password_r"></input>
                            <label for="password_rr">Повторіть пароль</label><input type="text" id = "password_rr"></input>
                            <div id = "reg">
                                <button>Зареєструватися</button>   
                            </div>
                        </form>
                </div>
                    <div class="footer">
                    <div class = "FirstPF">
                        <img src={logo} alt=""></img>
                        <a href="">Всі конференції</a>
                    </div>
                    <div class = "SecondPF"> 
                        <p>© 2022</p>
                        <p>Made with ❤️ by Alexey and Lina</p>
                    </div>
                    </div>
                </div>
        )
    }
}    
export default RegForm