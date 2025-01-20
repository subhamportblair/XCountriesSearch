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
      <h5>{name}</h5>
    </div>
  );
};

const Card = ({ data, search }) => {
  /*const dummyData = {
    name: "subham",
    age: "24",
    photo:
      "https://www.londondentalsmiles.co.uk/wp-content/uploads/2017/06/person-dummy.jpg",
  };*/

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {data
        .filter((i) => {
          return search.toLowerCase() === ""
            ? i
            : i.common.toLowerCase().includes(search);
        })
        .map((i) => (
          <OneCard
            key={i.common}
            name={i.common}
            flag={i.png}
            abbr={i.common}
          />
        ))}
    </div>
  );
};

export default Card;
