import { useEffect, useState } from "react";
import axios from "axios";
import NearEarthObjectChart from "./NearEarthObjectChart";

const NearEarthObjectChartData = () => {
  const [data, setData] = useState([]);
  const [selectedChartType, setSelectedChartType] = useState("BarChart");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=hkIOiAkFnVbB1f3dvygLxj59rAXhgCZidSWHVmKl
      `
      )
      .then((res) => {
        const legends = [
          "Neo Name",
          "Min Estimated Diameter (km)",
          "Max Estimated Diameter (km)",
          "Orbiting Body",
        ];

        const values = res.data.near_earth_objects.map((object) => {
          return [
            object.name,
            object.estimated_diameter.kilometers.estimated_diameter_min,
            object.estimated_diameter.kilometers.estimated_diameter_max,
            object.close_approach_data[0].orbiting_body,
          ];
        });
        setData([
          legends,
          ...values
            .sort((a, b) => {
              const meanA = (a[1] + a[2]) / 2;
              const meanB = (b[1] + b[2]) / 2;
              return meanA - meanB;
            })
            .reverse(),
        ]);
      });
  }, []);

  return data.length > 1 ? (
    <div>
      <button
        onClick={() =>
          setSelectedChartType(
            selectedChartType === "Table" ? "BarChart" : "Table"
          )
        }
      >
        Change type of Visualization
      </button>
      <NearEarthObjectChart data={data} type={selectedChartType} />
    </div>
  ) : (
    <p>Sorry, no data available at this moment</p>
  );
};

export default NearEarthObjectChartData;
