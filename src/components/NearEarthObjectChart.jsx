import Chart from "react-google-charts";

const NearEarthObjectChart = (props) => {
  return (
    <Chart
      height={"90vh"}
      chartType={props.type}
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
      chartWrapperParams={{ view: { columns: [0, 1, 2] } }}
      chartPackages={["corechart", "controls"]}
      rootProps={{ "data-testid": "1" }}
      controls={[
        {
          controlType: "CategoryFilter",
          options: {
            filterColumnIndex: 3,
            ui: {
              labelStacking: "vertical",
              label: "Orbital Body",
              allowTyping: false,
              allowMultiple: false,
            },
          },
        },
      ]}
    />
  );
};

export default NearEarthObjectChart;
