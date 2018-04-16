import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './Login.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';

@inject('userStore')
@observer
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
    const { username, password } = this.state
    
    this.props.userStore.login(username, password).then(() => {
      history.push('/deals')
    })
  }
  
  render() {
    return (
      <div className="login-container">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
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
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default withRouter(Login)
