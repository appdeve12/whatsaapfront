import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Nav, Card } from 'react-bootstrap';
import { FaPlus, FaTrash } from 'react-icons/fa';
const MessageInput = () => {
  const [messages, setMessages] = useState([{ id: 1, text: 'Message 1' }]);
  const [activeId, setActiveId] = useState(1);

  const handleAdd = () => {
    const newId = messages.length ? messages[messages.length - 1].id + 1 : 1;
    const newMessage = { id: newId, text: `Message ${newId}` };
    setMessages([...messages, newMessage]);
    setActiveId(newId);
  };

  const handleRemove = (id) => {
    const updated = messages.filter(msg => msg.id !== id);
    setMessages(updated);
    if (activeId === id && updated.length) {
      setActiveId(updated[0].id);
    }
  };

  const handleTextChange = (id, newText) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, text: newText } : msg
    ));
  };

  const activeMessage = messages.find(msg => msg.id === activeId);

  return (
    <Container className="p-2">
      <Card style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <Nav variant="tabs">
                {messages.map((msg, index) => (
                  <Nav.Item key={msg.id}>
                    <Nav.Link
                      active={msg.id === activeId}
                      onClick={() => setActiveId(msg.id)}
                    >
                      Message {index + 1}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          <Col xs="auto">
  <Button variant="success" size="sm" onClick={handleAdd} className="me-2" title="Add">
    <FaPlus />
  </Button>
  {messages.length > 1 && (
    <Button variant="danger" size="sm" onClick={() => handleRemove(activeId)} title="Remove">
      <FaTrash />
    </Button>
  )}
</Col>
          </Row>
        </Card.Header>

        <Card.Body>
          {activeMessage && (
            <Form.Group>
              <Form.Label className="fw-bold">
                Message {messages.findIndex(m => m.id === activeId) + 1}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                style={{
                  maxHeight: '150px',
                  overflowY: 'auto',
                  resize: 'none',
                }}
                value={activeMessage.text}
                onChange={(e) => handleTextChange(activeId, e.target.value)}
              />
            </Form.Group>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MessageInput;
