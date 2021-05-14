import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchItems = () => (dispatch) => {
  dispatch(itemsLoading());

  return fetch(baseUrl + "items")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((items) => dispatch(addItems(items)))
    .catch((error) => dispatch(itemsFailed(error.message)));
};

export const itemsLoading = () => ({
  type: ActionTypes.ITEMS_LOADING,
});

export const itemsFailed = (errMess) => ({
  type: ActionTypes.ITEMS_FAILED,
  payload: errMess,
});

export const addItems = (items) => ({
  type: ActionTypes.ADD_ITEMS,
  payload: items,
});
