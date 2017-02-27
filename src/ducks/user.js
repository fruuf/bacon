// constants (these identify an event)
const USER_ADD = 'USER_ADD';
const USER_EDIT = 'USER_EDIT';
const USER_REMOVE = 'USER_REMOVE';
const USER_SAVE = 'USER_SAVE';
const USER_CHANGE_CURRENT_NAME = 'USER_CHANGE_CURRENT_NAME';

// inital state (the state when the app loads)
const initialState = {
  userList: [{ name: 'Suman', id: 1 }, { name: 'Jan', id: 2 }],
  currentUserName: '',
  currentEditUser: 0,
};

// lets fake a user ID, its usually a server who does that for us
let currentId = 2;
const generateNewUserId = () => {
  currentId += 1;
  return currentId;
};

// action creators (these ones are to normalise events)
export const addUser = name => ({
  type: USER_ADD,
  // the generateNewUserId is hacky but will do for now
  payload: { id: generateNewUserId(), name },
});

export const editUser = user => ({
  type: USER_EDIT,
  payload: user,
});

export const saveUser = (id, name) => ({
  type: USER_SAVE,
  payload: { id, name },
});

export const removeUser = id => ({
  type: USER_REMOVE,
  payload: id,
});

export const changeCurrentUserName = name => ({
  type: USER_CHANGE_CURRENT_NAME,
  payload: name,
});

// the reducer (takes the current state and the dispatched action and returns the new state)
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // add a user to the list
    case USER_ADD: {
      const { user } = payload;
      return { ...state }; // ???
    }

    // update a user
    case USER_EDIT: {
      const { id, name } = payload;
      return { ...state, currentEditUser: id, currentUserName: name };
    }

    case USER_SAVE: {
      const { id, name } = payload;
      return { ...state, currentEditUser: 0 }; // ???
    }

    // delete a user
    case USER_REMOVE: {
      const id = payload;
      return { ...state }; // ???
    }

    // update the new user name
    case USER_CHANGE_CURRENT_NAME: {
      const name = payload;
      return { ...state, currentUserName: name };
    }

    default:
      return state;
  }
};
