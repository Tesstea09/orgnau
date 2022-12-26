import './Ent.css'
import price from "./currency-dollar-circle.svg"
import React, { Component, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "./firebase.js"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InfoCard2 = (props) =>  {


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
                setCardData(data.data().dateInfo.price)
            }
            )
        }

    }, [cardID]);

        return (
            <div class="infocard">
                <img src={price}></img>
                <p id='infoname'>Оргвнесок</p>
                <p id='infodate'> {cardData || <Skeleton />} </p>
            </div>
        )
}
export default InfoCard2