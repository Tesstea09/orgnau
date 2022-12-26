import React,{Component} from 'react'
import './Ent.css'
import logo from './logo.png'
import { Link } from "react-router-dom";

function Footer(){
        return(
            <div class="footer">
                <div class = "FirstPF">
                    <Link to = '/EventList'>
                        <img src={logo} alt=""></img>
                    </Link>
                    <Link to = '/EventList'>
                        <a href="">Всі конференції</a>
                    </Link>
                </div>
                <div class = "SecondPF"> 
                    <p>© 2022</p>
                    <p>Made with ❤️ by Alexey and Lina</p>
                </div>
            </div>
        )       
}
export default Footer