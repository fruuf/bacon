import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '/components/Dashboard';
import Footer from '/components/Footer';
import Header from '/components/Header';
// import './style.css';

class Home extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div> 
        <Header/>
        <Dashboard/>
        <Footer/>
      </div>
      
      );
  }
}

/* 
-- Task 1: nest components
div.home
  div.header
  div.dashboard
  div.footer
  
-- Task 2:
add an email field to the form and store
*/



export default connect()(Home)
