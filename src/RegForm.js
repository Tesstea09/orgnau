import React, { Component } from 'react'
import './Ent.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import logo from './logo.png'

import { doc, setDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "./firebase.js";

const { v4: uuidv4 } = require('uuid');

async function addUser(userName, userSurname, userMail, userPass) {
    const colRef = collection(db, 'users');

    setDoc(doc(db, "users", uuidv4()), {
        name: userName + userSurname,
        mail: userMail,
        password: userPass
    });
}



class RegForm extends Component {

    async handleSubmit(e) {
        e.preventDefault();

        const userName = document.getElementById("name").value || "";
        const userSurname = document.getElementById("surname").value || "";
        const userMail = document.getElementById("email1").value || "";
        const userPass1 = document.getElementById("password_r").value || "";
        const userPass2 = document.getElementById("password").value || "";

    }

    render() {
        return (
            <div class="main">
                <Header />
                <div class="start">
                    <div id="startF">
                        <h1>Реєстрація</h1>
                        <p>Вже є акаунт? <Link to="/login" id="enter">Увійти</Link> </p>
                    </div>
                </div>
                <div id="Reg"> </div>
                <div id="RegS">
                    <form action="" class="RegForm" onSubmit={this.handleSubmit}>
                        <div class="nam_sur">
                            <div>
                                <label for="name" id="name_l">Ім'я</label>
                                <br></br>
                                <input type="text" id="name" placeholder='Ангеліна'></input>
                            </div>
                            <div>
                                <label for="surname">Прізвище</label>
                                <br></br>
                                <input type="text" id="surname" placeholder='Цезар'></input>
                            </div>
                        </div>
                        <label for="email">Електронна пошта</label><input type="text" id='email1' placeholder='email@gmail.com'></input>
                        <label for="company">Компанія/Заклад</label><input type="text" id="company" placeholder='НАУ'></input>
                        <label for="password_r">Пароль</label><input type="password" id="password_r" placeholder='**********'></input>
                        <label for="password_rr">Повторіть пароль</label><input type="password" id="password_rr" placeholder='**********'></input>
                        <div id="reg">
                            <button type="submit">Зареєструватися</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
export default RegForm