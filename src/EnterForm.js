import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import RegForm from './RegForm'
import './Ent.css'

import { db } from "./firebase.js"
import { doc, getDoc } from "@firebase/firestore";

async function loadData(docId) {
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

class EnterForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            emails: [],
            ids: [],
            errors: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        const email = document.getElementById("_emailInput").value || "";
        const password = document.getElementById("_passwordInput").value || "";


        console.log(email);
        console.log(password);
    }

    async componentDidMount(){
        var docIDS = await getDocID();
        console.log("Doc IDs: ", docIDS);

        for (var i = 0; i < docIDS.length; i++){
            var data = await loadData(docIDS.toString());
            this.state.emails.push(data.email);
            this.state.ids.push(docIDS);
        }
            console.log(this.state.emails);
            console.log(this.state.ids);

    }


    render() {
        return (
            <div class="main">
                <div class="start">
                    <div class="startF">
                        <h1>Увійти</h1>
                        <Link to='/RegForm'>
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