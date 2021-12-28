import {AddRecordValues} from './index'
export const validateAddRecord = (values: AddRecordValues) => {
    let errors:any = {};
    if (!values.recordType) {
      errors.recordType = "*Field cannot be empty";
    }
    if (!values.recordTitle) {
      errors.recordTitle = "*Field cannot be empty";
    }
    if (!values.recordAmount) {
      errors.recordAmount = "*Field cannot be empty";
    }
    if (!values.category) {
      errors.category = "*Field cannot be empty";
    }
    return errors;
  };
  