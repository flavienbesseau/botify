import Chart from "react-google-charts";

const NearEarthObjectChart = (props) => {
  console.log(props.nearEarthObjectsData);
  return (
    <Chart
      width={"1000px"}
      height={"2000px"}
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
