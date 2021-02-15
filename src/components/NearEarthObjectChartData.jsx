import { useEffect, useState } from "react";
import axios from "axios";
import NearEarthObjectChart from "./NearEarthObjectChart";

const NearEarthObjectChartData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=hkIOiAkFnVbB1f3dvygLxj59rAXhgCZidSWHVmKl
      `
      )
      .then((res) => {
        console.log("Finished fetching data");
        const legends = [
          "Neo Name",
          "Min Estimated Diameter (km)",
          "Max Estimated Diameter (km)",
        ];

        const values = res.data.near_earth_objects.map((object) => {
          return [
            object.name,
            object.estimated_diameter.kilometers.estimated_diameter_min,
            object.estimated_diameter.kilometers.estimated_diameter_max,
          ];
        });
        console.log("Will set data");
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
    <NearEarthObjectChart data={data} />
  ) : (
    <p>Sorry, no data available at this moment</p>
  );
};

export default NearEarthObjectChartData;
