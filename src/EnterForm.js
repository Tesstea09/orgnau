import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import RegForm from './RegForm'
import { Navigate } from "react-router-dom";
import './Ent.css'

import { db } from "./firebase.js"
import { doc, getDoc } from "@firebase/firestore";

async function checkPass(docId) {
    const docRef = doc(db, "users", docId);
    const docSnap = await getDoc(docRef);
    return (docSnap.data());
}

async function getDocID() {
    const colRef = collection(db, "users");
    const docsSnap = await getDocs(colRef);
    var docIDs = [];

    docsSnap.forEach(doc => {
        docIDs.push(doc.id)
    })

    return await docIDs;
}

async function getUserID(email) {
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));

    var docIDS = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        docIDS.push(doc.id);
    });

    return (docIDS.toString());

};

class EnterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();

        const email = document.getElementById("_emailInput").value || "";
        const password = document.getElementById("_passwordInput").value || "";
        const userID = await getUserID(email);

        try {
            var passGood = await checkPass(userID);
        }
        catch {alert("Email or password incorrect")};



        if (passGood.password == password) {
            console.log("Password correct");
            window.location.replace('/events')
        }
        else alert("Email or password incorrect");
    }

    render() {
        return (
            <div class="main">
                <div class="start">
                    <div class="startF">
                        <h1>Увійти</h1>
                        <Link to='/register'>
                            <p>Ще не створили акаунт? <span>Реєстрація</span> </p>
                        </Link>
                    </div>
                </div>
                <div class="Ent"> </div>
                <div class="EntS">
                    <form action="" name="EntF" class="EntForm" onSubmit={this.handleSubmit}>
                        <label for="email">Електронна пошта</label><input type="text" id='_emailInput' placeholder='email@gmail.com'></input>
                        <label for="password">Пароль</label><input type="password" id='_passwordInput' placeholder='*********'></input>
                        <div class="enter">
                            <button type="submit">Увійти</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default EnterForm