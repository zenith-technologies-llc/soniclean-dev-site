
import {loginSuccess} from 'modules/Auth'

export const userService = {
    login,
    logout
};

function login(email, password) {

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({mail: username, password: password})
    // }

    // console.log(requestOptions);

    // return fetch(`${ConfigParams.API_URL}/login`, requestOptions)
    //   .then(handleResponse)
    //   .then(user => {
    //     return user
    //   });

    const userToken = 'userToken'

    loginSuccess(userToken)

    return 'userToken'
}

function logout() {
    return ''
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}