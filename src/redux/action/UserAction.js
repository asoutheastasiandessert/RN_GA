export const changeName = text => {
  console.log('change', text);
  return {
    type: 'CHANGE_NAME',
    payload: text,
  };
};
