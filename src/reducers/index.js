import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Gallery from "./gallery";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    numberOperator: Gallery,
  });
