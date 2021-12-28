import axios from "../Config/axios";
import { Transaction } from "../Interface/TransactionState";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { addTransaction, loadTransaction, deleteTransaction } from "../Store/Transaction/action";
import { updateTotal } from "../Store/Analytics/action";
const BASE_PATH = "/transaction";

// * CREATE NEW TRANSACTION
export const APICreateTransaction = async (transaction: Transaction) => {
  try {
    const data = await axios.post(`${BASE_PATH}/`, { ...transaction });
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const createTransaction = (
  transaction: Transaction
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const response = await APICreateTransaction(transaction);
   
    dispatch(addTransaction(response[0]));
   
  };
};


// * GET ALL TRANSACTION
export const APIGetAllTransaction = async (page:number, size:number) => {
  try {
    
    const data = await axios.get(`${BASE_PATH}/${page}/${size}`,);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
}

export const getAllTransaction = (page:number, size:number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const [response, error] = await APIGetAllTransaction(page, size);
    if (error) console.log(error);
    dispatch(loadTransaction(response));
  };
};


// * API DELETE SINGLE TRANSACTION

export const APIDeleteSingleTransaction = async (transactionId:string) => {
  try {
    const data = await axios.delete(`${BASE_PATH}/${transactionId}`,);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
}

export const deleteSingleTransaction = (transactionId:string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const [response, error] = await APIDeleteSingleTransaction(transactionId);
    if (error) console.log(error);
    dispatch(deleteTransaction(transactionId));
  };
};


// * API TOTAL TRANSACTION STATS

export const APIGetTotalData = async () => {
  try {
    const data = await axios.get(`${BASE_PATH}/total`);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
}

export const getTotalData = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const [response, error] = await APIGetTotalData();
    if (error) console.log(error);
    dispatch(updateTotal(response));
  };
};