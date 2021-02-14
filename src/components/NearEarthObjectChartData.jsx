import { useEffect, useState } from "react";
import axios from "axios";
import NearEarthObjectChart from "./NearEarthObjectChart";

const NearEarthObjectChartData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
      .then((res) => {
        setData(
          res.data.near_earth_objects.map((object) => {
            return [
              object.name,
              object.estimated_diameter.kilometers.estimated_diameter_min,
              object.estimated_diameter.kilometers.estimated_diameter_max,
            ];
          })
        );
      });
  }, []);

  console.log(data);

  return <NearEarthObjectChart data={data} />;
};

export default NearEarthObjectChartData;
