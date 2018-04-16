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
            <div className="deal-distributor-avatar">
              <img src={`//logo.clearbit.com/${distributor}.com`} alt="distributor" />
            </div>
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
        <div className="top-logo">
          <img src={logo} alt="logo"/>
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