import './Ent.css'
import calendar from "./calendar-check-02.svg"
import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "./firebase.js"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InfoCard = (props) => {

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
                setCardData(data.data().dateInfo.placement)
            }
            )
        }

    }, [cardID]);

        return (
            <div class="infocard">
                <img src={calendar}></img>
                <p id='infoname'>Розміщення матеріалів конференції на сайті</p>
                <p id='infodate'> {cardData || <Skeleton />} </p>
            </div>
        )
}
export default InfoCard