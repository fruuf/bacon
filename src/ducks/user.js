// constants (these identify an event)
const CHANGE_FIRSTNAME = 'CHANGE_FIRSTNAME';
const CHANGE_LASTNAME = 'CHANGE_LASTNAME';

// inital state (the state when the app loads)
const initialState = {
  firstName: 'Suman',
  lastName: 'K',
};

// action creators (these ones are to normalise events)
export const changeFirstName = (firstName) => ({
  type: CHANGE_FIRSTNAME,
  payload: {firstName: firstName}
});

export const changeLastName = (lastName) => ({
  type: CHANGE_LASTNAME,
  payload: {lastName: lastName}
});


// the reducer (takes the current state and the dispatched action and returns the new state)
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_FIRSTNAME: return { ...state, firstName: payload.firstName };
    case CHANGE_LASTNAME: return { ...state, lastName: payload.lastName};
    default: return state;
  }
};
