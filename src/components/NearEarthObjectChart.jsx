import Chart from "react-google-charts";

const NearEarthObjectChart = (props) => {
  return (
    <Chart
      // width={"1000px"}
      height={"1000px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={props.data}
      options={{
        chartArea: { width: "50%" },
        legend: {
          position: "top",
        },
        hAxis: {
          title: "Min Estimated Diameter (km)",
          minValue: 0,
        },
        vAxis: {
          title: "NEO Name",
        },
      }}
      // For tests
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default NearEarthObjectChart;
