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

        setData([legends, ...values]);
      });
  }, []);

  return <NearEarthObjectChart data={data} />;
};

export default NearEarthObjectChartData;
