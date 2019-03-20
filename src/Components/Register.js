import React, {Component} from 'react';
import ShowRegister from './showRegister';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Register extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <div className="vertical-center">
        <div className="container">
          <h3>Routine Timer</h3>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Control
                      placeholder="First name"
                      value={this.signUpFirstName}
                      onChange={this.onTextboxChangeSignUpFirstName}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Control
                      placeholder="Last name"
                      value={this.signUpLastName}
                      onChange={this.onTextboxChangeSignUpLastName}
                    />
                  </Form.Group>
                </Col>
              </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.signUpEmail}
                onChange={this.onTextboxChangeSignUpEmail}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.signUpPassword}
                onChange={this.onTextboxChangeSignUpPassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          <ShowRegister value="Already have an account?" showRegister={this.props.showRegister}></ShowRegister>
        </div>
      </div>

    )
  }
}

export default Register;
