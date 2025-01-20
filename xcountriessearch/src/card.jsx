import React from "react";

const OneCard = ({ name, flag }) => {
  return (
    <div
      className="countryCard"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "200px",
        width: "200px",
        border: "solid 1px black",
        padding: "5px",
        borderRadius: "10px",
      }}
    >
      <img
        src={flag}
        style={{
          height: "150px",
          width: "150px",
        }}
        alt={`Flag of ${name}`}
      />
      <h2>{name}</h2>
    </div>
  );
};

const Card = ({ data, search }) => {
  const filteredData = data.filter((i) => {
    const searchTerm = search.trim().toLowerCase();
    return searchTerm === "" || i.common.toLowerCase().includes(searchTerm);
  });

  const uniqueData = [...new Map(filteredData.map((item) => [item.common, item])).values()];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {uniqueData.length === 0 ? (
        <p>No results found</p>
      ) : (
        uniqueData.map((i) => (
          <OneCard key={i.common} name={i.common} flag={i.png} />
        ))
      )}
    </div>
  );
};

export default Card;
