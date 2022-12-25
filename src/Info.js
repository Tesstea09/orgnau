import React,{Component} from 'react'
import './Ent.css'
import back from './back.png'
import { db } from "./firebase.js"
import { doc, getDoc } from "@firebase/firestore";

async function loadData(docId) {
    const docRef = doc(db, "tags", docId);

    const docSnap = await getDoc(docRef);

    return (docSnap.data());

}

class Info extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            name: '',
        }

        this.handleEvent = this.handleEvent.bind(this); 
    }

    handleEvent(){  
        console.log(this.props);  
    }  

    async componentDidMount() {
        //console.log("Component did Mount");

        var eventID = this.props.eventID;
        const data = await loadData(eventID);

        this.setState({ 
            name: data.name
        });
    }


    render(){
        return(
            <div class = "info">
                <img src = {back}></img>
                <div></div>
                <div class = "catname">
                    <p> {this.state.name} </p>
                </div>
            </div>
        )
    }
}    
export default Info