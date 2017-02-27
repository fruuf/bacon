import React from 'react';
import {
  addUser,
  editUser,
  saveUser,
  removeUser,
  changeCurrentUserName,
} from '/ducks/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';

const mapStateToProps = state => ({
  userList: state.user.userList,
  currentUserName: state.user.currentUserName,
  currentEditUser: state.user.currentEditUser,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addUser,
    editUser,
    saveUser,
    removeUser,
    changeCurrentUserName,
  },
  dispatch,
);

const Dashboard = props => (
  <div>
    <ul>
      {props.userList.map(user => (
        <li>
          {user.name}
          <span
            className="remove-user"
            onClick={() => props.removeUser(user.id)}
          >
            remove
          </span>
          <span className="edit-user" onClick={() => props.editUser(user)}>
            edit
          </span>
        </li>
      ))}
    </ul>
    <hr />
    <input
      type="text"
      onChange={e => props.changeCurrentUserName(e.target.value)}
      value={props.currentUserName}
    />
    {(props.currentEditUser || null) &&
      <button
        onClick={() =>
          props.saveUser(props.currentEditUser, props.currentUserName)}
      >
        Save
      </button>}
    {!props.currentEditUser &&
      <button onClick={() => props.addUser(props.currentUserName)}>Add</button>}
  </div>
);

/*
-- Task 1: nest components


*/

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
