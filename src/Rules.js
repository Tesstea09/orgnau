import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import close from './close.svg'
import logo from './logo.png'
function Rules() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        dialogClassName = "rules"
        show={show}
        onHide={handleClose}
        keyboard={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header>
          <div class ="modalhead">
          <Modal.Title id = "title">Правила подання та оформлення тез</Modal.Title>
          <Button id = "modalclose" variant="secondary" onClick={handleClose}><img src={close}></img></Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
          <div class = "modalcontent">
          <h1 class = "modalheader">Загальні вимоги до оформлення тез</h1>
          <ul class = "modallist">
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
          <div class ="modalcontent">
            <h1 class = "modalheader">Подання тез</h1>
            <ul class = "modallist">
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
              <a href={logo} download="newfile.png"><Button id = "certificate" variant="general" >Приклад сертифікату</Button></a>
              <a href={logo} download="newfile.png"><Button id = "example" variant="general" >Приклад оформлення тез</Button></a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Rules