import './Ent.css'
import date from "./calendar.svg"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "./firebase.js"

const InfoCardV = (props) =>  {


    const { cardID } = useParams();
    const [cardData, setCardData] = useState(null);

    useEffect(() => {

        if (cardID) {
            async function fetchData(cardID) {
                const docRef = doc(db, "events", cardID);
                const data = await getDoc(docRef);
                return data;
            }
            fetchData(cardID).then((data) => {
                setCardData(data.data().dateInfo.deadline)
            }
            )
        }

    }, [cardID]);

        return (
            <div class="infocard">
                <img src={date}></img>
                <p id='infoname'>Термін подання тез та оргвнесків (включно)</p>
                <p id='infodate'> {cardData} </p>
            </div>
        )
    
}
export default InfoCardV