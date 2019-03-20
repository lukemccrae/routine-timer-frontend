import React, {Component} from 'react';
import './App.css';
import 'whatwg-fetch';
import {getFromStorage, setInStorage} from './utils/storage';
import Register from './Components/Register';
import Signin from './Components/Signin';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: '',
      timers: [],
      username: '',
      showRegister: false
    }
    this.showRegister = this.showRegister.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this)
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this)
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this)
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this)
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this)
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this)
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      //verify token
      fetch('/api/account/verify?token=' + obj.token).then(res => res.json()).then(json => {
        if (json.success) {
          this.setState({token: obj.token, isLoading: false})
        } else {
          this.setState({isLoading: false})
        }
      }).then(fetch('api/user?token=' + obj.token).then(res => res.json()).then(json => {
        if (json.success) {
          this.setState({timers: json.data})
        }
      }));
    } else {
      this.setState({isLoading: false})
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({signInEmail: event.target.value})
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({signInPassword: event.target.value})
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

  showRegister() {
    this.setState({
      showRegister: !this.state.showRegister
    })
  }

  render() {
    if (this.state.showRegister == false) {
      return (
        <Signin showRegister={this.showRegister}></Signin>
      );
    }
    return (
      <Register showRegister={this.showRegister}></Register>
    )
  }
}

export default App;
