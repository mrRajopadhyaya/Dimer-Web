import axios from "../Config/axios";
import {Alert} from '../Utils/Alert';  
// import { Transaction } from "../Interface/TransactionState";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";
// import { addTransaction, loadTransaction, deleteTransaction } from "../Store/Transaction/action";
// import { updateTotal } from "../Store/Analytics/action";
const BASE_PATH = "/analytics";

// * Expense by category
export const APIGetExpenseByCategory = async () => {
  try {
    const data = await axios.get(`${BASE_PATH}/by-category`);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

// * Expense by date
export const APIGetExpenseByDate = async () => {
  try {
    const data = await axios.get(`${BASE_PATH}/by-date`);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

// export const createTransaction = (
//   transaction: Transaction
// ): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
//   return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
//     const response = await APICreateTransaction(transaction);
   
//     dispatch(addTransaction(response[0]));
   
//   };
// };