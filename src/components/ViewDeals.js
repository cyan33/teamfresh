import React, { Component } from 'react'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'

import './ViewDeals.css'
import logo from '../assets/logo.png'

export default class ViewDeals extends Component {
  state = {
    isLoadingDeals: true,
    deals: null
  }

  constructor(props){
	    super(props);

	    this.state = {
	      show: false
	    }
	    this.doSomething = this.doSomething.bind(this);
	    this.toggleShow = this.toggleShow.bind(this);
	    this.hide = this.hide.bind(this);
	  }

	  doSomething(e){
	    e.preventDefault();
	    console.log(e.target.innerHTML);
	  }

	  toggleShow(){
	    this.setState({show: !this.state.show});
	  }

	  hide(e){
	    if(e && e.relatedTarget){
	      e.relatedTarget.click();
	    }
	    this.setState({show: false});
	  }
	  
  componentDidMount() {
    DealStore.getDeals().then((deals) => {
      this.setState({ deals })
    })
  }
  
  getDealItems() {
    const { deals } = this.state
    return deals.map((deal, i) => {
      const { name, price, price_before, unit, distance, distributor, thumbnail } = deal
      return (
        <li
          key={i}
          className="deal-item"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="deal-item-container">
            <div className="deal-description">
              <div className="distance">
                <LocationIcon color="#cecece" />
                {distance} m
              </div>
              <div className="deal-name">{name}</div>
              <div className="deal-price">
                {`$${price}/${unit}`}&nbsp;<span className="deal-price_before">(was ${price_before})</span>
              </div>
            </div>
          </div>
        </li>
      )
    })
  }

  render() {
    const { deals } = this.state
    return (
      <div className="deals-container">
        <div className="top-logo" style={{zIndex:999}} >
        	<button className="btn-primary" type="button" onClick={this.toggleShow} onBlur={this.hide}>
        	<img src={logo} alt="logo" style={{zIndex:999}} />
        		<span className="caret"></span>
        	</button>       	
        <div className="dropdown-menu" >
        {
        	this.state.show &&
      (
        <ul className="dropdown-menu" style={{display: 'block'}}>
        <li><div className="btn-submit" style={{zIndex:200}}>
        	<input type="button" value="Profile"/>
        </div></li>
        <li><div className="btn-submit" style={{zIndex:200}}>
    		<input type="button" value="View Deals"/>
    	</div></li>
        <li><div className="btn-submit" style={{zIndex:200}}>
    		<input type="button" value="Shopping Cart"/>
    	</div></li>
    	<li><div className="btn-submit" style={{zIndex:200}}>
    		<input type="button" value="Log Out"/>
    	</div></li>
    	<div className="background-circle" style={{zIndex:10}} ></div>
        </ul>
      )
      }
        </div>
        </div>
        <div className="deals-search">
          <input type="text" />
          <SearchIcon color="gray" />
        </div>
        {
          deals &&
          <ul className="deals-list">
            {this.getDealItems()}
          </ul>
        }
      </div>
    )
  }
}