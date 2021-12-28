import { TotalData } from "../../Interface/AnalyticsState";
import { UPDATE_TOTAL } from "./constant";


export const updateTotal = (totalData: TotalData) => {
  return {
    type: UPDATE_TOTAL,
    payload: totalData,
  };
};
