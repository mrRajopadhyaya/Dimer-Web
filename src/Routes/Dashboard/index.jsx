import { useEffect, useState } from "react";
import AmountCard from "../../Components/AmountCard";
import DateCard from "../../Components/DateCard";
import { getTotalData } from "../../API/transaction";
import { useDispatch, useSelector } from "react-redux";
import Chart from "react-apexcharts";
import ExpenseLineChart from "../../Components/ExpenseLineChart";
import { getExpenseByCategory } from "../../Store/Analytics/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const totalData = useSelector((state) => state.analytics.totalData);
  const expenseByCategory = useSelector(
    (state) => state.analytics.expenseByCategory
  );
  const [chartOption, setChartOption] = useState({
    chart: {
      width: 200,
      type: "pie",
    },
    labels: [],
  });
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    dispatch(getTotalData());
    dispatch(getExpenseByCategory());
  }, []);

  useEffect(() => {
    setChartOption((prevState) => {
      return {
        ...prevState,
        labels: expenseByCategory.label,
      };
    });
    setChartSeries(expenseByCategory.value);
  }, [expenseByCategory]);
  return (
    <div className="dashboard">
      <DateCard />

      <div className="data-overview">
        <AmountCard totalData={totalData} />
        <div className="pie-chart">
          <Chart
            options={chartOption}
            series={chartSeries}
            type="pie"
            width="380"
            height="350"
          />
        </div>
      </div>
      <ExpenseLineChart />
    </div>
  );
};

export default Dashboard;
