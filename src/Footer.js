import React,{Component} from 'react'
import './Ent.css'
import logo from './logo.png'
function Footer(){
        return(
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
        )       
}
export default Footer