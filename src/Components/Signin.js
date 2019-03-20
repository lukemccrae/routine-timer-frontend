import React, {Component} from 'react';
import ShowRegister from './showRegister';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class Register extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="vertical-center">
          <div className="container">
            <h3>Routine Timer</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.signInEmail}
                  onChange={this.onTextboxChangeSignInEmail}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.signInPassword}
                  onChange={this.onTextboxChangeSignInPassword}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
            <ShowRegister value="Need to register?" showRegister={this.props.showRegister}></ShowRegister>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
