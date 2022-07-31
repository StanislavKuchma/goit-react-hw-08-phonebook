import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import React, { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));

    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: 650, height: 600, marginLeft: 100 }}
    >
      <h2>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          name="email"
          pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{ padding: 0, width: 100, height: 50 }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Login;
