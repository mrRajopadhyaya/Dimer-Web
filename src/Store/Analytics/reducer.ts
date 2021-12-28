import { ReduxAction } from "../../Utils/interface/common";
import { AnalyticsState } from "../../Interface/AnalyticsState";
import {
  UPDATE_TOTAL
} from "./constant";

const initialState: AnalyticsState = {
    totalData: {
        totalBalance:0,
        totalExpense: 0, 
        totalIncome: 0
    }
};

export const AnalyticsReducer = (
  state: AnalyticsState = initialState,
  action: ReduxAction
) => {
  switch (action?.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        totalData: {...action.payload},
      };
    
    default:
      return state;
  }
};
