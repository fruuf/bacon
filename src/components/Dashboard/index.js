import React from 'react';
import { changeFirstName, changeLastName } from '/ducks/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
  }
};


const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeFirstName: changeFirstName,
  changeLastName: changeLastName,
}, dispatch)


const Dashboard = (props) => (
  <div>
    <h1>Hello {props.firstName} {props.lastName}!</h1>
    Update the Name onChange<br />
    First Name: <input 
      type="text" 
      onChange={(event) => props.changeFirstName(event.target.value)}
      value={props.firstName}
    />
    <br />
    Last Name: <input 
      type="text" 
      onChange={(event) => props.changeLastName(event.target.value)}
      value={props.lastName}
    />
    <br />
    Email : <input 
    type="email" 
    name="email" 
    />
  </div>
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



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
