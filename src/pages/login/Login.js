import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./login.css"

// TODO: use --> import {Redirect} from 'react-router-dom';
import {Container,Button,Form} from 'react-bootstrap';

/**
 * Component for Login Page
 */
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state= {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(e){
    this.setState({
      [e.target.type]: e.target.value
    });
  }

  handleSubmit(e){
    alert("the name was submitted"+ this.state.email)
    e.preventDefault();
  }
  render() {
    // TODO: use to redirect if user not logged in
    // if (this.props.user) {
    //   return (
    //     <Redirect to={{
    //       pathname: '/profile',
    //     }} />
    //   )
    // }
    return (
      <Container className="mt-3">
        <Form onSubmit={this.handleSubmit} className="form">
          <h1 class="display-4 text-secondary">Login</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p>Don't have an account?</p>
  <a class="text-decoration-none" href="/signup">Sign-up connect!</a>

</Form>
      </Container>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}