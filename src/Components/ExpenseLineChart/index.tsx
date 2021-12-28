import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import { APIGetExpenseByDate } from "../../API/analytics";
import moment from "moment";

const chartOptions = {
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

const state = {
  series: [
    {
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
};

const ExpenseLineChart = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [chartOption, setChartOption] = useState({ xaxis: { categories: [] } });
  useEffect(() => {
    (async () => {
      const [dateResponse, dateError] = await APIGetExpenseByDate();
      const seriesData: any = dateResponse?.expense?.map(
        (data: any) => data.amount
      );
      const categoriesData = dateResponse?.expense?.map((data: any) =>
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
    })();
  }, []);
  return (
    <div>
      <Chart options={chartOption} series={series} type="line" height={350} />
    </div>
  );
};

export default ExpenseLineChart;
