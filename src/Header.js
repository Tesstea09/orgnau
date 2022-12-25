import React,{Component} from 'react'
import './Ent.css'
import logo from './logo.png'
function Header(){
        return(
                <div class = 'header'>
                    <img src={logo} alt=""></img>
                    <form action="" id="f">
                        <input type="text" placeholder="Пошук" id="search"></input>
                    </form>
                </div>
        )       
}
export default Header