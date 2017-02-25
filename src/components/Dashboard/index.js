import React from 'react';
import { changeFirstName, changeLastName } from '/ducks/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      style={{borderColor: 'red'}} 
      type="text" 
      onChange={(event) => props.changeFirstName(event.target.value)}
      value={props.firstName}
    />
    <br />
    Last Name: <input 
      style={{borderColor: 'yellow'}} 
      type="text" 
      onChange={(event) => props.changeLastName(event.target.value)}
      value={props.lastName}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
