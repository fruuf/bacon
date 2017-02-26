import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';


const Header = () => (
  <ul>
    <li><a className="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
</ul>
);


/* 
-- Task 1: nest components
div.home
  div.header
  div.dashboard
  div.footer
  
-- Task 2:
add an email field to the form and store
*/



export default connect()(Header)
