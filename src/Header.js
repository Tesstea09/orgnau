import React,{Component} from 'react'
import './Ent.css'
import logo from './logo.png'
import { Link } from "react-router-dom";

function Header(){
        return(
                <div class = 'header'>
                    <Link to = '/events'>
                        <img src={logo} alt=""></img>
                    </Link>
                    
                </div>
        )       
}
export default Header