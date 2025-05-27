import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { BsFillSendFill } from 'react-icons/bs';
import { MdScheduleSend } from 'react-icons/md';
import { SlCalender } from "react-icons/sl";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import WhatsaapNumber from '../../container/whatsaapNumber/WhatsaapNumber';
import MessageInput from '../../container/MessageInput/MessageInput';
import FileAttachment from '../../container/FileAttachment/FileAttachment';
import ReceivedMessages from '../../container/ReceivedMessages/ReceivedMessages';
import SendNowModal from "../../components/Modal/SendNowModal"
import Header from "../../components/layout/Header"
const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [scheduledDate, setScheduledDate] = useState(new Date());
    const [showSendModal, setShowSendModal] = useState(false);

  const handleScheduleClick = () => setShowCalendar(true);
  const handleCloseCalendar = () => setShowCalendar(false);
const sentMessages = [
    {
      id: '917045686933',
      type: 'Contact',
      date: '2022-04-08 12:14:16',
      status: 'Sent',
      message: 'hello there',
    },
    // Add more messages if needed
  ];

  return (
    <>
    <Header/>
    <Container fluid className="bg-light" style={{ height: '92vh' }}>
      <Row className="h-100">
        <Col md={4} className="text-white p-3 bg-white" >
          <ReceivedMessages />
        </Col>

        <Col md={4} className="text-white p-3 bg-white" >
          <WhatsaapNumber />
        </Col>

        <Col md={4} className="bg-white d-flex flex-column">
          <div className="p-3">
            <MessageInput />
            <FileAttachment />
          </div>

         

  <div
  className="d-flex justify-content-between align-items-center px-4 py-2 text-white bg-success"
  style={{
    position: 'fixed',
    bottom: 0,
  
    width: '30vw',

    fontWeight: '500',
    boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.15)',
   
  }}
>
  {/* Schedule Send Button */}
  <button
    onClick={handleScheduleClick}
    className="btn border-0 d-flex align-items-center gap-2 px-4 py-2 rounded-pill"
    style={{
      backgroundColor: '#25D366',
      color: 'white',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <SlCalender size={20}/>
   
    Schedule Send
  </button>

  {/* Send Now Button */}
  <button
    onClick={() => setShowSendModal(true)}
    className="btn border-0 d-flex align-items-center gap-2 px-4 py-2 rounded-pill"
    style={{
      backgroundColor: '#128C7E',
      color: 'white',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <BsFillSendFill size={18} />
    Send Now
  </button>
</div>
        </Col>
      </Row>
      
  {showSendModal && <SendNowModal
        show={showSendModal}
        handleClose={() => setShowSendModal(false)}
        sentMessages={sentMessages}
      />}    

      {/* Schedule Calendar Modal */}
      <Modal show={showCalendar} onHide={handleCloseCalendar} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Schedule Date & Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker
            selected={scheduledDate}
            onChange={(date) => setScheduledDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCalendar}>Cancel</Button>
          <Button variant="primary" onClick={() => { handleCloseCalendar(); alert(`Scheduled for: ${scheduledDate}`); }}>
            Confirm Schedule
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
};

export default Dashboard;
