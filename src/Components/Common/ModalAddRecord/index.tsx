import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogProps,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  Button,
  Radio,
  RadioGroup,
  MenuItem,
  Select,
  TextField,
  Typography,
  createStyles,
  Theme,
  makeStyles,
  FormLabel,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { CATEGORIES, RECORD_TYPE } from "../../../Utils/constants/categories";
import { createTransaction, getTotalData } from "../../../API/transaction";
import { useDispatch } from "react-redux";
import useForm from "../../../Utils/useForm";
import { validateAddRecord } from "./validateAddRecord";
import { Alert } from "../../../Utils/Alert";
import {
  getExpenseByCategory,
  getExpenseByDate,
} from "../../../Store/Analytics/action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: "100%",
    },
    flex: {
      display: "flex",
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
      marginBottom: theme.spacing(2),
      width: "100%",
      flex: 1,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    marginX: {
      marginBottom: 20,
    },
    marginRight: {
      marginRight: 20,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

export interface AddRecordValues {
  recordType: string;
  recordTitle: string;
  recordAmount: string;
  category: string;
}

const INITIAL_FORM_VALUES: AddRecordValues = {
  recordType: "",
  recordTitle: "",
  recordAmount: "",
  category: "",
};

export default function ModalAddRecord(props: any) {
  const classes = useStyles();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");
  const dispatch = useDispatch();

  const handleClose = () => {
    props.toggleRecordModal(false);
  };

  const submitTransaction = async () => {
    const params = {
      type: values.recordType,
      category: values.category,
      title: values.recordTitle,
      amount: values.recordAmount,
    };
    await dispatch(createTransaction(params));
    resetFormValue(INITIAL_FORM_VALUES);
    updateDashboard();
    Alert("success", "Transaction added successfully");
  };

  const updateDashboard = () => {
    dispatch(getExpenseByDate());
    dispatch(getTotalData());
    dispatch(getExpenseByCategory());
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    resetFormValue,
  } = useForm(INITIAL_FORM_VALUES, validateAddRecord, submitTransaction) as any;

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.showRecordModal}
        aria-labelledby="max-width-dialog-title"
      >
        <div className="dialog-title">
          <DialogTitle id="max-width-dialog-title" className="padding-top-sm">
            <Typography> Add New Record </Typography>
          </DialogTitle>
          <ClearIcon
            className="title-icon cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <DialogContent>
          <form className={classes.form} noValidate>
            <FormControl
              component="fieldset"
              error={errors?.recordType?.length}
              className="full-width"
            >
              <div className={`${classes.flex} ${classes.spaceBetween}`}>
                <FormLabel className="add-form-label">Record Type</FormLabel>
                <RadioGroup
                  aria-label="recordType"
                  name="recordType"
                  value={values.recordType}
                  onChange={handleChange}
                  row
                >
                  {RECORD_TYPE.map((val) => (
                    <FormControlLabel
                      value={val}
                      control={<Radio />}
                      label={val}
                    />
                  ))}
                </RadioGroup>
              </div>
              <FormHelperText>{errors?.recordType ?? ""}</FormHelperText>
            </FormControl>
            <div className={classes.marginX}>
              <TextField
                error={errors?.recordTitle?.length}
                id="standard-basic"
                label="Title"
                fullWidth
                name="recordTitle"
                value={values.recordTitle}
                onChange={handleChange}
                helperText={errors.recordTitle}
              />
            </div>

            <div className={classes.marginX}>
              <TextField
                error={errors?.recordAmount?.length}
                id="standard-basic"
                label="Amount"
                name="recordAmount"
                fullWidth
                value={values.recordAmount}
                onChange={handleChange}
                helperText={errors.recordAmount}
              />
            </div>

            <div className={""}>
              <FormControl
                className={`${classes.formControl} ${classes.marginRight}`}
                error={errors?.category?.length}
              >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  fullWidth
                >
                  {CATEGORIES.map((category) => (
                    <MenuItem value={category} className="default-font-color">
                      {category}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors?.category ?? ""}</FormHelperText>
              </FormControl>
            </div>
          </form>
        </DialogContent>
        <DialogActions className="">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            onClick={() => resetFormValue(INITIAL_FORM_VALUES)}
          >
            Reset
          </Button>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            size="medium"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
        <Backdrop
          className={classes.backdrop}
          open={isSubmitting}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Dialog>
    </React.Fragment>
  );
}
