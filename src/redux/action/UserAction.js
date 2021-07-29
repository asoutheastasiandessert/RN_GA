export const changeName = text => {
  return {
    type: 'CHANGE_NAME',
    payload: text,
  };
};

export const getMovies = (search, param2) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=570c36d75740509c00d865a804d826a5&language=en-US&page=1`,
      );
      const resJson = await res.json();
      dispatch({
        type: 'GET_MOVIES',
        movies: resJson.results,
      });
      return {message: 'success', movies: resJson.results};
    } catch (error) {
      // dispatch({
      //   type: 'FAIL_LOGIN',
      //   payload: 'fail',
      // });
      return {message: error.message, codeStatus: 400};
    }
  };
};
