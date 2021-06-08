import { GET_PICTURE_DETAIL, GET_HOMEPAGE } from "../types/HomepageTypes";
import axios from "axios";

export const getHomepage = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => {
      dispatch({
        type: GET_HOMEPAGE,
        payload: response.data
      });
    })
};

export const getPictureDetail = (id) => (dispatch) => {
  axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((response) => {
      dispatch({
        type: GET_PICTURE_DETAIL,
        payload: response.data
      });
    })
};
