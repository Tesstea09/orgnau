import React,{Component, useEffect, useState} from 'react'
import './Ent.css'
import InfoCardV from './InfoCardV';
import InfoCard from './InfoCard';
import InfoCard2 from './InfoCard2';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import logo from './logo.png'
import file from './icon/file-check.svg'
import user from './icon/user.svg'
import mail from './icon/mail.svg'
import globe from './icon/globe.svg'

import { useLocation } from "react-router-dom";

import { db } from "./firebase.js"
import { doc, getDoc } from "@firebase/firestore";
import { collection } from "firebase/firestore";



const DetailEvent = (props) => {
    const { state } = useLocation();
  
    const [eventName, setEventName] = useState(null);
    const [eventType, setEventType] = useState(null);
    const [eventDate, setEventDate] = useState(null);
    const [eventDescription, setEventDescription] = useState(null);
    const [eventImageURL, setEventImageURL] = useState(null);
    const [eventLang, setEventLang] = useState(null);

  
    useEffect(() => {
      async function fetchData(state) {
        const colRef = collection(db, "events");
        const docRef = doc(db, "events", state);
        
        const data = await getDoc(docRef);
        
        let langToRender = [];
        langToRender.push(data.data().lang);

        let map = new Map();
        map.set("name", data.data().name);
        map.set("type", data.data().type);
        map.set("date", data.data().date);
        map.set("description", data.data().description);
        map.set("imageURL", data.data()["image-url"]);
        map.set("lang", langToRender.join(", "));
        
        return map;
      }
  
      fetchData(state).then((map) => {
        setEventName(map.get("name"));
        setEventType(map.get("type"));
        setEventDate(map.get("date"));
        setEventDescription(map.get("description"));
        setEventImageURL(map.get("imageURL"));
        setEventLang(map.get("lang"));
      });
    }, []);

        

        return(
            <div>
                <Header/>
                <div class = "container">
                <div class ="inf">
                <button id = 'to'>К списку конференций</button>
                <div class = "infodet">
                    <div class = "poster">
                        <img src = {eventImageURL}></img>
                    </div>
                    <div class = "det">
                        <p> {eventType} </p>
                        <h1> {eventName} </h1>
                        <div class = "card">
                            <InfoCard/>
                            <InfoCardV/>
                            <InfoCard2/>
                        </div>
                        <div class = "but">
                            <div class="apply">
                                <a href="mailto:cezar191299@gmail.com?subject=Подача заявки">Подати заявку</a> 
                            </div>
                            <div class = "rulesb">
                                <a href={logo} download="newfile.png">Правила подачи и оформления тезисов</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class = "screen2">
                    <div>
                        <h1 id = "othhead">Основные направления конференции</h1>
                    </div>
                    <div class = "part1s">
                        <div class = "infcard">
                            <Info/>
                        </div>
                        <div class = "textdesc">
                            <div class = "confdesc">
                                <h1>Описание конференции</h1>
                                <p> {eventDescription} </p>
                            </div>
                            <div class = "confdetail">
                                <h1>Детали</h1>
                                <div class = "part3">
                                    <img img={file}></img>
                                    <p>Участник может предоставить несколько докладов</p>
                                </div>
                                <div class = "part3">
                                    <img img={file}></img>
                                    <p>{eventLang}</p>
                                </div>
                            </div>
                            <div class = "confcont">
                                <h1>Контакты</h1>
                                <div class = "part3">
                                    <img src = {user}></img>
                                    <div>
                                        <p>Владленов Денис Андреевич</p>
                                        <p>Клиент-менеджер «isg-konf.com»</p>
                                    </div>
                                </div>
                                <div class = "part3">
                                    <img src = {mail}></img>
                                    <a href="mailto:info@isg-konf.com">info@isg-konf.com</a>
                                </div>
                                <div class = "part3">
                                    <img src = {globe}></img>
                                    <a href = "https://isg-konf.com/">https://isg-konf.com/</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class = "interest">
                    <h1>Заинтересованы?</h1>
                    <div class = "but">
                            <div class="apply">
                                <a href="mailto:cezar191299@gmail.com?subject=Подача заявки">Подати заявку</a> 
                            </div>
                            <div class = "rulesb">
                                <a href={logo} download="newfile.png">Правила подачи и оформления тезисов</a>
                            </div>
                    </div>
                </div>
                <div class = "other">
                    <h1 id = "othhead">Другие конференции</h1>
                    <div class = "otherconf">

                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        )

}
export default DetailEvent