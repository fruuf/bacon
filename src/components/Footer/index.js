import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';


const Footer = () => (
  <footer>
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
  </footer>
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



export default connect()(Footer)
