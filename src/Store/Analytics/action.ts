import { TotalData } from "../../Interface/AnalyticsState";
import { UPDATE_EXPENSE_BY_CATEGORY, UPDATE_EXPENSE_BY_DATE, UPDATE_TOTAL } from "./constant";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { APIGetExpenseByCategory, APIGetExpenseByDate } from "../../API/analytics";



export const updateTotal = (totalData: TotalData) => {
  return {
    type: UPDATE_TOTAL,
    payload: totalData,
  };
};

export const updateExpenseCategory = (expense:any) => {
  return {
    type: UPDATE_EXPENSE_BY_CATEGORY,
    payload: expense
  }
};

export const updateExpenseDate = (expense:any) => {
  return {
    type: UPDATE_EXPENSE_BY_DATE,
    payload: expense
  }
};



export const getExpenseByCategory = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, any>) => {
    const [response, error] = await APIGetExpenseByCategory();
    if(error) return;
    dispatch(updateExpenseCategory(response));
  };
};

export const getExpenseByDate = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, any>) => {
    const [response, error] = await APIGetExpenseByDate();
    if(error) return;
    dispatch(updateExpenseDate(response.expense));
  };
};