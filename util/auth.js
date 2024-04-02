import axios from "axios";

const API_KEY = "AIzaSyD91Qvq53UIJJgUNBFQSkPcuuyucE6LbHw";

async function authenticate(mode, email, password) {
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + API_KEY;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  // console.log(response.data); // make sure we'e successfully logging in
  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password); // returns token
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
