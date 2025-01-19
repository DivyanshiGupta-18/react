import React, { Component } from 'react'

export default class Section1 extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-between mt-5'>
        <div className="align-items-center gap-2 d-flex flex-column ">
        <i className="fa-solid fa-truck-fast"></i>
        <span>Free Shipping</span>
        <span>Worldwide</span>
        </div>
        <div className="align-items-center gap-2 d-flex flex-column">
        <i className="fa-solid fa-rotate-left"></i>
        <span>Easy Returns</span>
        <span>Within 7 Days</span>
        </div>
        <div className="align-items-center gap-2 d-flex flex-column">
        <i className="fa-solid fa-shield"></i>
        <span>Secured</span>
        <span>Payments</span>
        </div>
        <div className="align-items-center gap-2 d-flex flex-column">
        <i className="fa-solid fa-sack-dollar"></i>
        <span>COD Available</span>
        <span>Pay on delivery</span>
        </div>
        <div className="align-items-center gap-2 d-flex flex-column">
        <i className="fa-solid fa-hand-holding-heart"></i>
        <span>Genuine</span>
        <span>Handmade with love</span>
        </div>
      </div>
    )
  }
}
