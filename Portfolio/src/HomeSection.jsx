import React, { Component } from 'react'

export default class HomeSection extends Component {
  render() {
    return (
      <div>
         <img 
                    src="Divyanshi.jpeg"
                    alt="Divyanshi"
                    className="rounded-circle mb-3"
                    style={{ width: '128px', height: '128px', objectFit: 'cover' }}
                  />
      </div>
    )
  }
}
