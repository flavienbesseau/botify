import Chart from "react-google-charts";

const NearEarthObjectChart = (props) => {
  return (
    <Chart
      width={"1000px"}
      height={"450px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["City", "Min Estimated Diameter (km)", "Max Estimated Diameter (km)"],
        ["New York City, NY", 2, 3.4],
        ["Los Angeles, CA", 1.5, 2.5],
        ["Chicago, IL", 5, 6.5],
        ["Houston, TX", 3, 3.75],
        ["Philadelphia, PA", 10, 10.25],
      ]}
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
