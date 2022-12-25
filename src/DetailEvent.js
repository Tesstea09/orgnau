import React,{Component} from 'react'
import './Ent.css'
import InfoCardV from './InfoCardV';
import InfoCard from './InfoCard';
import InfoCard2 from './InfoCard2';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import poster from "./Rectangle.png"
import logo from './logo.png'
class DetailEvent extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div class = "infodet">
                    <div class = "poster">
                        <img src = {poster}></img>
                    </div>
                    <div class = "det">
                        <p>Международная научно-практическая конференция </p>
                        <h1>Экспериментальные и теоретические исследования в современной науке</h1>
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
                <div class = "screen2">
                    <div>
                        <h1>Основные направления конференции</h1>
                    </div>
                    <div class = "part1s">
                        <div class = "infcard">
                            <Info/>
                        </div>
                        <div >
                            <div class = "congdesc">
                                <h1>Описание конференции</h1>
                                <p>International Science Group приглашает студентов, преподавателей школ и университетов принять участие в международной научно-практической конференции «Current challenges, trends and transformations», 13-16 декабря 2022 г., Бостон, США</p>
                            </div>
                            <div class = "confdetail">
                                <h1>Детали</h1>
                                <p>Участник может предоставить несколько докладов</p>
                                <p>Языки</p>
                            </div>
                            <div class = "confcont">
                                <h1>Контакты</h1>
                                <p>Владленов Денис Андреевич</p>
                                <p>Клиент-менеджер «isg-konf.com»</p>
                                <p>info@isg-konf.com</p>
                                <p>https://isg-konf.com/</p>
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
                <div>
                    <h1>Другие конференции</h1>
                    <div>

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}
export default DetailEvent