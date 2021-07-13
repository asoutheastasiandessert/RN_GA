const initialState = {
  user: {},
  token: '',
  name: 'rangga',
};

export default function UserReducer(state = initialState, action) {
  console.log('action ', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}
