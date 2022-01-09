import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function InterviewChart() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const getData = async () => {
    try {
      let response = await axios.get("http://localhost:5500/random-pricing");
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [change]);
  return (
    <>
      <Chart
        width={400}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={data}
      />

      <button onClick={() => setChange(!change)}>Change data</button>
    </>
  );
}

export default InterviewChart;
