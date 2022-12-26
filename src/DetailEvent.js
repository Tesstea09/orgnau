import React, { Component, useEffect, useState } from 'react'
import './Ent.css'
import InfoCardV from './InfoCardV';
import InfoCard from './InfoCard';
import InfoCard2 from './InfoCard2';
import Info from './Info';
import EventCard from './EventCard';
import Header from './Header';
import Footer from './Footer';
import logo from './logo.png'
import file from './icon/file-check.svg'
import language from './icon/language.svg'
import user from './icon/user.svg'
import mail from './icon/mail.svg'
import globe from './icon/globe.svg'
import attach from './icon/file-attachment.svg'
import imageLoading from './image-loading.png'
import chevronLeft from './icon/chevron-left.svg'

import { useParams } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { db } from "./firebase.js"
import { doc, getDoc, getDocs } from "@firebase/firestore";
import { collection } from "firebase/firestore";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import close from './close.svg'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailEvent = (props) => {
    const { cardID } = useParams();

    //console.log("cardID ", cardID);

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClosev2 = () => setShow2(false);
    const handleShowv2 = () => setShow2(true);

    const [eventName, setEventName] = useState(null);
    const [eventType, setEventType] = useState(null);
    const [eventDate, setEventDate] = useState(null);
    const [eventDescription, setEventDescription] = useState(null);
    const [eventImageURL, setEventImageURL] = useState(null);
    const [eventImageBGURL, setEventImageBGURL] = useState(null);
    const [eventLang, setEventLang] = useState(null);
    const [eventTags, setEventTags] = useState([""]);
    const [otherEvents, setOtherEvents] = useState([""]);


    useEffect(() => {

        if (cardID) {
            window.scrollTo(0, 0);
            async function fetchData(cardID) {

                const colRef = collection(db, "events");
                const docRef = doc(db, "events", cardID);
                const docsSnap = await getDocs(colRef);

                var docIDs = [];
                docsSnap.forEach(doc => {
                    docIDs.push(doc.id)
                })

                const data = await getDoc(docRef);

                let langToRender = [];
                langToRender.push(data.data().lang);

                let eTags = data.data().tags;

                let map = new Map();
                map.set("name", data.data().name);
                map.set("type", data.data().type);
                map.set("date", data.data().date);
                map.set("description", data.data().description);
                map.set("imageURL", data.data()["image-url"]);
                map.set("lang", langToRender.join(", "));
                map.set("eventTags", eTags);
                map.set("imageBG", data.data()["imageBG-url"]);
                map.set("otherEvents", docIDs);

                return map;
            }

            fetchData(cardID).then((map) => {
                setEventName(map.get("name"));
                setEventType(map.get("type"));
                setEventDate(map.get("date"));
                setEventDescription(map.get("description"));
                setEventImageURL(map.get("imageURL"));
                setEventLang(map.get("lang"));
                setEventTags(map.get("eventTags"));
                setEventImageBGURL(map.get("imageBG"));
                setOtherEvents(map.get("otherEvents"));
            });
        }

    }, [cardID]);



    return (

        <div>
            <Header />
            <div class="detailsBackdrop">
                <img class="detailsBackdropIMG" src={eventImageBGURL}></img>
            </div>
            <div class="container">
                <div class="inf">
                    <Link to="/events" >
                        <button id='to'>К списку конференций</button>
                    </Link>
                    <div class="infodet">
                        <div class="poster">
                            <img src={eventImageURL || imageLoading}></img>
                        </div>
                        <div class="det">
                            <p> {eventType || <Skeleton />} </p>
                            <h1> {eventName || <Skeleton count={2} />} </h1>
                            <div class="card">
                                <InfoCard />
                                <InfoCardV />
                                <InfoCard2 />
                            </div>
                            <div class="but">
                                <div class="apply">
                                    <Button variant="primary" onClick={handleShowv2} id="primaryButton"><div id='primaryButtonText'>Подати заявку</div> <img src={chevronLeft}></img> </Button>
                                </div>

                                <div class="rulesb">
                                    <Button variant="primary" onClick={handleShow} id="secondaryButton"><div id='secondaryButtonText'>Правила подачи и оформления тезисов</div></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="screen2">
                    <div>
                        <h1 id="othhead">Основні напрямки конференції</h1>
                    </div>
                    <div class="part1s">

                        <div class="infcard">
                            {eventTags.map(eventTags => (
                                <Info key={eventTags} eventID={eventTags} />
                            ))}
                        </div>

                        <div class="textdesc">
                            <div class="confdesc">
                                <h1>Описание конференции</h1>

                                <p> {eventDescription || <Skeleton count={10} />} </p>
                            </div>
                            <div class="confdetail">
                                <h1>Детали</h1>
                                <div class="part3">
                                    <img src={file}></img>
                                    <p>Учасник може надати кілька доповідей</p>
                                </div>
                                <div class="part3">
                                    <img src={language}></img>
                                    <p>{eventLang || <Skeleton />}</p>
                                </div>
                                <div class="part3">
                                    <img src={attach}></img>
                                    <p>Електронна версія збірника</p>
                                </div>
                            </div>
                            <div class="confcont">
                                <h1>Контакти</h1>
                                <div class="part3">
                                    <img src={user}></img>
                                    <div>
                                        <p>Владленов Денис Андрійович</p>
                                        <p>Клієнт-менеджер «isg-konf.com»</p>
                                    </div>
                                </div>
                                <div class="part3">
                                    <img src={mail}></img>
                                    <a href="mailto:info@isg-konf.com">info@isg-konf.com</a>
                                </div>
                                <div class="part3">
                                    <img src={globe}></img>
                                    <a href="https://isg-konf.com/">https://isg-konf.com/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="interest">
                    <h1>Заинтересованы?</h1>
                    <div class="but">
                        <div class="apply">
                            <Button variant="primary" onClick={handleShowv2} id="primaryButton"><div id='primaryButtonText'>Подати заявку</div> <img src={chevronLeft}></img> </Button>
                        </div>

                        <div class="rulesb">
                            <Button variant="primary" onClick={handleShow} id="secondaryButton"><div id='secondaryButtonText'>Правила подачи и оформления тезисов</div></Button>
                        </div>
                    </div>
                </div>
                <div class="other">
                    <h1 id="othhead">Інші конференції</h1>
                    <div class="otherconf">
                        {otherEvents.map(otherEvents => (
                            <EventCard key={otherEvents} cardID={otherEvents} />
                        ))}
                    </div>
                </div>
            </div>
            <Modal
                dialogClassName="rules"
                show={show}
                onHide={handleClose}
                keyboard={true}
                aria-labelledby="contained-modal-title-vcenter"
                backdrop={false}
            >

                <Modal.Header>
                    <div class="modalhead">
                        <Modal.Title id="title">Правила подання та оформлення тез</Modal.Title>
                        <Button id="modalclose" variant="secondary" onClick={handleClose}><img src={close}></img></Button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div class="modalcontent">
                            <h1 class="modalheader">Загальні вимоги до оформлення тез</h1>
                            <ul class="modallist">
                                <li>Учасник може подати кілька доповідей;</li>
                                <li>Максимальна кількість авторів однієї доповіді – п'ять;</li>
                                <li>Об'єм матеріалів – від двох до десяти сторінок;</li>
                                <li>Формат тексту – Microsoft Word (*.doc, *.docx);</li>
                                <li>Мова тексту будь-яка – українська, англійська та інші;</li>
                                <li>Орієнтація сторінки – лише книжкова;</li>
                                <li>Поля (верхнє, нижнє, ліве, праве) – 2 см;</li>
                                <li>Шрифт - Times New Roman, кегель - 14;</li>
                                <li>Міжрядковий інтервал – одинарний, абзац – 0,75 див.</li>
                                <li>Колір шрифту – чорний.</li>
                            </ul>
                        </div>
                        <div class="modalcontent">
                            <h1 class="modalheader">Подання тез</h1>
                            <ul class="modallist">
                                <li>Одним листом надсилаються файли тез доповідей та квитанція про внесення оргвнеску на ел. пошту: info@isg-konf.com.</li>
                                <li>Тема листа – назва конференції.</li>
                                <li>Файли назвати за прикладом: Тези_Петров; Оргвнесок_Петров.</li>
                                <li>Формат тексту – Microsoft Word (*.doc, *.docx);</li>
                                <li>Після надсилання матеріалів на нашу ел. пошту чекайте на підтвердження про їх отримання та включення вас до списку учасників конференції.</li>
                                <li>Організаційний внесок для участі у конференції вказується на сторінці самої конференції та в інформаційному листі конференції.</li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    <div class="ex">
                        <a href={logo} download="newfile.png"><Button id="certificate" variant="general" >Приклад сертифікату</Button></a>
                        <a href={logo} download="newfile.png"><Button id="example" variant="general" >Приклад оформлення тез</Button></a>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal
                size="sm"
                dialogClassName="rules"
                show={show2}
                onHide={handleClosev2}
                keyboard={true}
                centered

            >
                <Modal.Header>
                    <div class="modalhead">
                        <Modal.Title id="title" aria-labelledby="contained-modal-title-vcenter">Подати заявку</Modal.Title>
                        <Button id="modalclose" variant="secondary" onClick={handleClosev2}><img src={close}></img></Button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div class="modalcontent">
                            <h1 class="modalheader">Подання тез</h1>
                            <ul class="modallist">
                                <li>Файли назвати за прикладом: Тези_Петров; Оргвнесок_Петров.</li>
                                <li>Після надсилання матеріалів на нашу ел. пошту чекайте на підтвердження про їх отримання та включення вас до списку учасників конференції.</li>
                                <li>Організаційний внесок для участі у конференції вказується на сторінці самої конференції та в інформаційному листі конференції.</li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    <div class="applyfoot">
                        <div class="applyv2">
                            <a href="mailto:cezar191299@gmail.com?subject=Подача заявки">Подати заявку</a>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <Footer />
        </div>

    )

}
export default DetailEvent