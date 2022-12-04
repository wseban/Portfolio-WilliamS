import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

export default function Contact() {
  
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    // if (e.target.name === 'email') {
    //   validateEmail(e.target.value);
    // }
    setFormState({...formState, [e.target.name]: e.target.value});
    console.log(formState)

  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState.email)
   
      console.log(validateEmail(formState.email))
      if (!validateEmail(formState.email) || !formState.message || !formState.name){
        alert("Please ensure your email is valid and all fields are filled out so that I can get back to you!")
      }

    setFormState({email: "",name: "",message: ""})

    emailjs.send('default_service', 'template_dsjx25m', formState, 'C8S5M9CyzbHsWjtS2')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h2>Contact Me</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={formState.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          value={formState.email}
          name="email"
          onChange={handleInputChange}
          type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message Me</Form.Label>
          <Form.Control 
          value={formState.message}
          name="message"
          onChange={handleInputChange}
          as="textarea" 
          aria-label="With textarea" />
        </Form.Group>
        <Button variant="primary" onClick={handleFormSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
