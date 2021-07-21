const initialState = {
  user: {},
  token: '',
  name: 'rangga',
  movies: [],
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };

    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.movies,
      };

    default:
      return state;
  }
}
