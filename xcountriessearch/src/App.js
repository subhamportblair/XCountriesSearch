import React, { useEffect, useState } from "react";
import Card from "./card";

export default function App() {
  const api =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const apicall = async (api) => {
    try {
      const response = await fetch(api);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apicall(api);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
        }}
      >
        <input
          type="text"
          placeholder="Search for Countries"
          id="country"
          size="50"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="countryCard">
        <Card data={data} search={search} />
      </div>
    </div>
  );
}
