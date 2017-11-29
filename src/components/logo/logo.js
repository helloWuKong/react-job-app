import React from 'react'
import logoImg from './job.jpeg'
import './logo.css'

class Logo extends React.Component {
  render () {
    return (
      <div className="logo-container">
        <img src={logoImg} alt="job"/>
      </div>
    )
  }
}

export default Logo