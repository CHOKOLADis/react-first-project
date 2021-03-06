import React, { Component } from 'react';
import { Form,Container,Button } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
        <Container className="contacts" style={{width:"500px"}}>
          <h1>Contact us</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
              <Form.Text>
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3"/>
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Container>
    );
  }
}
