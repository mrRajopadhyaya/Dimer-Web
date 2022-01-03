import { ReduxAction } from "../../Utils/interface/common";
import { AnalyticsState } from "../../Interface/AnalyticsState";
import {
  UPDATE_TOTAL,
  UPDATE_EXPENSE_BY_CATEGORY,
  UPDATE_EXPENSE_BY_DATE
} from "./constant";

const initialState: AnalyticsState = {
    totalData: {
        totalBalance:0,
        totalExpense: 0, 
        totalIncome: 0
    },
    expenseByCategory: {
      label:[],
      value: []
    },
    expenseByDate: []
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

      case UPDATE_EXPENSE_BY_DATE:
        return {
          ...state,
          expenseByDate:[ ...action.payload ]
        };
      
      case UPDATE_EXPENSE_BY_CATEGORY:
        return {
          ...state,
          expenseByCategory: {...action.payload }
        };
    
    default:
      return state;
  }
};
