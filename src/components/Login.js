import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Login.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';

class Login extends Component {
  state = {
    username: null,
    password: null,
  }

  onUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  onLogin = () => {
    const { history } = this.props
    
    history.push('/deals')
  }
  
  render() {
    return (
      <div className="login-container">
          <img src={logoTitle} alt="FreshSpire" className="img-format"/>
          <div className="login-credentials">
            <label>Username
              <input 
                type="text"
                onChange={this.onUsernameChange}
              />
            </label>
          </div>
          <div className="login-credentials">
            <label>Password
              <input
                type="password"
                onChange={this.onPasswordChange}
              />
            </label>
          </div>
          <div className="btn-submit">
            <input 
              type="button"
              value="Login"
              onClick={this.onLogin}
            />
          </div>
          <div className="btn-submit">
            <input type="button" value="Sign Up"/>
          </div>
      </div>
    )
  }
}

export default withRouter(Login)
