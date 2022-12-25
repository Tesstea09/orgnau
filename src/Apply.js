import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import close from './close.svg'

function Apply() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        size="sm"
        dialogClassName = "rules"
        show={show}
        onHide={handleClose}
        keyboard={true}
        
        centered

      >
        <Modal.Header>
          <div class ="modalhead">
          <Modal.Title id = "title" aria-labelledby="contained-modal-title-vcenter">Подати заявку</Modal.Title>
          <Button id = "modalclose" variant="secondary" onClick={handleClose}><img src={close}></img></Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
          <div class = "modalcontent">
          <h1 class = "modalheader">Подання тез</h1>
          <ul class = "modallist">
            <li>Файли назвати за прикладом: Тези_Петров; Оргвнесок_Петров.</li>
            <li>Після надсилання матеріалів на нашу ел. пошту чекайте на підтвердження про їх отримання та включення вас до списку учасників конференції.</li>
            <li>Організаційний внесок для участі у конференції вказується на сторінці самої конференції та в інформаційному листі конференції.</li>
          </ul>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer >
          <div class = "applyfoot">
            <div class="applyv2">
            <a href="mailto:cezar191299@gmail.com?subject=Подача заявки">Подати заявку</a> 
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Apply