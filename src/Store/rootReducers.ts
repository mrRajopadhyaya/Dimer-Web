import { combineReducers } from "redux";
import { TransactionReducer } from "./Transaction/reducer";
import { AnalyticsReducer } from './Analytics/reducer';
import { UserReducer } from "./User/reducer";

const rootReducer = () => {
  return combineReducers({
    transaction: TransactionReducer,
    analytics: AnalyticsReducer,
    user: UserReducer,
  });
};

export default rootReducer;
