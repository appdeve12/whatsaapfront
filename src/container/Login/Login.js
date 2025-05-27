// src/components/Login.js
import React, { useState } from 'react';
import { Form, Button, Card, Container, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      toast.success('Login successful!');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        
      // localStorage.setItem('token', res.data.token);
      setTimeout(() => {
        navigate('/home');
      }, 1500);

    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <ToastContainer />
        <Card className="shadow p-4 rounded-4">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Button variant="outline-secondary" onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
