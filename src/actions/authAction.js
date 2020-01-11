import axios from "axios";
import { GET_ERRORS } from "./types";

export const loginUser = user => dispatch => {
  axios
    .post("http://admin_server.maharah.neumtech.net/api/AdminUsers/login", user)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
