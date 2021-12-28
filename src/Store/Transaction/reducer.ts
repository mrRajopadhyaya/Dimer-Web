import { ReduxAction } from "../../Utils/interface/common";
import { TransactionState } from "../../Interface/TransactionState";
import {
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
  LOAD_TRANSACTION,
} from "./constant";

const initialState: TransactionState = {
  expense: {},
  income: {},
  transactionList: [],
  transactionCount: 0,
};

export const TransactionReducer = (
  state: TransactionState = initialState,
  action: ReduxAction
) => {
  switch (action?.type) {
    case LOAD_TRANSACTION:
      return {
        ...state,
        transactionList: action.payload.transaction,
        transactionCount: action.payload.count,
      };
    case CREATE_TRANSACTION:
      return {
        ...state,
        transactionList: [...state.transactionList, action.payload],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactionList: state.transactionList.filter(
          (record: any) => record._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
