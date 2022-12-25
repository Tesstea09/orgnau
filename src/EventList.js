import React, { Component } from 'react';
import './Ent.css';
import EventCard from './EventCard';
import Header from './Header';
import Footer from './Footer';
import { db } from "./firebase.js"
import { collection, query, where, getDocs } from "firebase/firestore";

async function getDocID() {
  const colRef = collection(db, "events");
  const docsSnap = await getDocs(colRef);
  var docIDs = [];

  docsSnap.forEach(doc => {
    docIDs.push(doc.id)
  })

  return await docIDs;
}

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    const docIDs = await getDocID();
    //console.log(docIDs);

    const events = docIDs.map((id) => {
      return { id };
    });

    this.setState({ events });
  }

  render() {
    return (      
      <div>
        <Header />
        <div class = "EventContent">
            <div color="red">
            <h1 id = "All">Всі конференції</h1>
            </div>
            <div class = "list ">
            {this.state.events.map((event) => (
            <EventCard key={event.id} cardID={event.id} />
            ))}
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EventList;
