import React from "react";
import moment from "moment";

const DateCard = () => {
  return <div className="date-wrapper">{moment().format("MMMM, YYYY")}</div>;
};

export default DateCard;
