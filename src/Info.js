import React, { Component } from 'react'
import './Ent.css'
import imageLoading from './image-loading.png'
import { db } from "./firebase.js"
import { doc, getDoc } from "@firebase/firestore";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

async function loadData(docId) {
    const docRef = doc(db, "tags", docId);

    const docSnap = await getDoc(docRef);

    return (docSnap.data());

}

class Info extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            imageURL: ''
        }

        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent() {
        console.log(this.props);
    }

    async componentDidMount() {
        var eventID = this.props.eventID;
        const data = await loadData(eventID);

        this.setState({
            name: data.name,
            imageURL: data["img-url"]
        });
    }


    render() {
        return (
            <div class = "info">
                <div class="tagImg"> <img src={this.state.imageURL || imageLoading}></img> </div>
                <div class = "catname">
                    <p> {this.state.name || <Skeleton />} </p>
                </div>
            </div>
        )
    }
}    
export default Info

