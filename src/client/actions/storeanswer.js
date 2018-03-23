import {
  STORE_ANSWER,
  STORE_DATA_FAILURE
} from '../constants';

export const compilationOfAnswers = data => {
  return {
    type: STORE_ANSWER,
    payload: data
  };
};

export const dataSavedFailure = massage => {
  return {
    type: STORE_DATA_FAILURE,
    payload: massage
  };
};
export const saveAnswer= () => (dispatch, getState) => {
  console.log(getState().questionAnswer,'statttte');
  const data = getState().questionAnswer;

  fetch('/api/v1/storeanswer', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response From Sarver In Reserve');
      }

      return response;
    })
    .catch(err => dispatch(dataSavedFailure(err.massage)));

};
