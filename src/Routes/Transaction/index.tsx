import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  deleteSingleTransaction,
  getAllTransaction,
} from "../../API/transaction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  ExpandMore,
  ExpandLess,
  RemoveCircle,
  ArrowDownward,
  ArrowUpward,
} from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Transaction() {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const transactionList = useSelector(
    (state: any) => state?.transaction?.transactionList ?? []
  );
  const transactionCount = useSelector(
    (state: any) => state?.transaction?.transactionCount ?? -1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getAllTransaction(currentPage + 1, rowsPerPage));
    })();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(getAllTransaction(newPage + 1, rowsPerPage));
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };
  const deleteTransaction = (transactionId: string) => {
    dispatch(deleteSingleTransaction(transactionId));
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionList.map((row: any) => (
              <TableRow key={row.title}>
                <TableCell className="flex">
                  <div className="row-icon">
                    {row.type === "EXPENSE" ? (
                      <ArrowDownward className="color-expense" />
                    ) : (
                      <ArrowUpward className="color-income" />
                    )}
                  </div>
                  <div
                    className={`type-label ${
                      row.type === "EXPENSE" ? "color-expense" : "color-income"
                    }`}
                  >
                    {row.type}
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{moment(row.createdAt).fromNow()}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">
                  <RemoveCircle
                    className="action-btn"
                    onClick={() => deleteTransaction(row._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={transactionCount}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
