import React,{Component} from 'react'
import './Ent.css'
import logo from './logo.png'
import { Link } from "react-router-dom";

function Header(){
        return(
                <div class = 'header'>
                    <Link to = '/EventList'>
                        <img src={logo} alt=""></img>
                    </Link>

                    <form action="" id="f">
                        <input type="text" placeholder="Пошук" id="search"></input>
                    </form>
                </div>
        )       
}
export default Header