import React, {Component} from 'react';
import ShowRegister from './showRegister';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.onSignUp = this.onSignUp.bind(this)
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this)
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this)
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this)
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this)
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({signUpEmail: event.target.value})
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({signUpPassword: event.target.value})
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({signUpFirstName: event.target.value})
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({signUpLastName: event.target.value})
  }

  onSignUp() {
    fetch(`/api/account/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.signUpFirstName,
        lastName: this.state.signUpLastName,
        email: this.state.signUpEmail,
        password: this.state.signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpFirstName: '',
            signUpLastName: ''
          })
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          })
        }
      });
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
            <Button onClick={this.onSignUp} variant="primary" type="submit">
              Register
            </Button>
          <ShowRegister value="Already have an account?" showRegister={this.props.showRegister}></ShowRegister>
        </div>
      </div>

    )
  }
}

export default Register;
