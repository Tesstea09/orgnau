import React,{Component} from 'react'
import './Ent.css'
import pattern from './top-pattern.png'
import confpost from './image.png'
import { db } from "./firebase.js"
import { doc, getDoc, getFirestore } from "@firebase/firestore";

import { collection, query, where, getDocs } from "firebase/firestore";

const firestore = getFirestore();

async function loadData(docId) {
    const colRef = collection(db, "events");
    const docRef = doc(db, "events", docId);

    const docSnap = await getDoc(docRef);
    //console.log(docSnap.data());

    return (docSnap.data());

}

class EventCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'Loading...',
            type: 'Loading...',
            description: 'Loading...',

            date: 'Loading...',
            language: 'Loading...'
        }

        this.handleEvent = this.handleEvent.bind(this); 
    }

    handleEvent(){  
        console.log(this.props);  
    }  

    async componentDidMount() {
        //console.log("Component did Mount");

        var cardID = this.props.cardID;
        const data = await loadData(cardID);

        this.setState({ 
            name: data.name,
            type: data.type,
            description: data.description,
            date: data.date,
            language: data.lang
        });
    }
    render(){

        let langToRender = [];
        langToRender.push(this.state.language);
        
        return(
            <div class = "Card">
                <img src={pattern} alt="pattern" id="patt"></img>
                <div class = "ConfComp">
                    <div class = "ConfDev">
                        <div>
                            <img src = {confpost} id = "post"></img>
                        </div>
                        <div class = "confinfor">
                            <p id = "conftype"> {this.state.type} </p>
                            <h1 id = "confname"> {this.state.name.slice(0, 70)} {this.state.name.length > this.state.name.slice(0, 70).length ? "..." : ""} </h1>
                            <p id = "confdesc"> {this.state.description.slice(0, 250)} {this.state.description.length > this.state.description.slice(0, 250).length ? "..." : ""}</p>
                            <form class = "confinf">
                                <output id="date">{this.state.date}</output>
                                <output id="lang">{langToRender.join(", ")}</output>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}    
export default EventCard