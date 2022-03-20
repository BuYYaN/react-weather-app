import { ASYNC_ERROR, ASYNC_START, ASYNC_STOP } from "./actionTypes";

const fetchMiddleware = (storeAPI) => (next) => (action) => {
  if (isPromise(action.payload)) {
    storeAPI.dispatch({ type: ASYNC_START });

    action.payload
      .then((data) => {
        storeAPI.dispatch({ type: ASYNC_STOP, payload: data });
        storeAPI.dispatch({ type: action.type, payload: data });
      })
      .catch((error) => {
        storeAPI.dispatch({ type: ASYNC_ERROR, error });
      });

    return;
  }

  return next(action);
};

const isPromise = (value) => value && typeof value.then === "function";

export default fetchMiddleware;
