import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  
  // const colorsky=()=>{
  //   document.body.style.backgroundColor='#85E6C5'
  // }
  // const colorred=()=>{
  //   document.body.style.backgroundColor='#FF9B9B'
  // }
  // const colorblue=()=>{
  //   document.body.style.backgroundColor='#d5c6e0'
  // }
  // const coloryellow=()=>{
  //   document.body.style.backgroundColor='#F6FA70'
  // }
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/#">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
          {/* <div className="color sky"onClick={colorsky}></div>
          <div className="color red"onClick={colorred}></div>
          <div className="color blue"onClick={colorblue}></div>
          <div className="color yellow"onClick={coloryellow}></div> */}
        
      <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
  <input className="form-check-input " type="checkbox" role="switch"onClick={props.togglemode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label text bold" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?"Enable Dark mode" :"Disable Dark mode"}
  </label>
</div>
    </div>
  </div>
</nav>
  ) 
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    abouttext:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: 'set title',
    abouttext: 'About text here'
}