import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import { APIGetExpenseByDate } from "../../API/analytics";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getExpenseByDate } from "../../Store/Analytics/action";

const ExpenseLineChart = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const dispatch = useDispatch();
  const [chartOption, setChartOption] = useState({ xaxis: { categories: [] } });
  const expenseByDate = useSelector(
    (state: any) => state.analytics.expenseByDate
  );
  useEffect(() => {
    dispatch(getExpenseByDate());
  }, []);

  useEffect(() => {
    const seriesData: any = expenseByDate?.map((data: any) => data.amount);
    const categoriesData = expenseByDate?.map((data: any) =>
      moment(data._id).format("MMM DD")
    );
    setChartOption((prevState) => {
      return {
        ...prevState,
        xaxis: {
          ...prevState.xaxis,
          categories: categoriesData,
        },
      };
    });
    setSeries([{ data: seriesData }]);
  }, [expenseByDate]);
  return (
    <div>
      <Chart options={chartOption} series={series} type="line" height={350} />
    </div>
  );
};

export default ExpenseLineChart;
