
import React, { Component } from 'react'


import './SignUp.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Mono.png';

export default class SignUp extends Component {
  state = {

  }

  render() {
    return (
      <div className="SignUp-container">
				<img src={logoTitle} alt="FreshSpire" className="img-format"/>
	      <div className="SignUp-context">
	      	<label>Username <input type="text"/></label>
	      </div>
				<div className="SignUp-context">
					<label>Password <input type="password"/></label>
				</div>
				<div className="SignUp-context">
					<label>Repeat Password <input type="password"/></label>
				</div>
				<div className="SignUp-context">
					<label>Email <input type="text"/></label>
				</div>
				<div className="SignUp-context">
					<label> Phone # <input type="text"/></label>
				</div>
				<div className="SignUp-context">
					<label>Address <input type="text"/></label>
				</div>			  		  
				<div className="btn-submit">
					<input type="button" value="Sign Up"/>
				</div>
      </div>
    )
  }
}