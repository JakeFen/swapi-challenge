import React from "react";

function CharDescription(props) {
  return (
    <div className="chardescription-wrapper">
      <h2>Character Description</h2>
      {props.selectPerson[0] ? (
        <div>
          <h3>Name: {props.selectPerson[0].name}</h3>
          <p>
            {props.selectPerson[0].name} is a{" "}
            {props.selectPerson[0].gender === "n/a"
              ? "robot"
              : props.selectPerson[0].gender}{" "}
            that has{" "}
            {props.selectPerson[0].hair_color === "n/a"
              ? "no"
              : props.selectPerson[0].hair_color}{" "}
            hair with {props.selectPerson[0].eye_color} eyes that was born in{" "}
            {props.selectPerson[0].birth_year}. They are{" "}
            {props.selectPerson[0].height} cm tall and their mass is a total of{" "}
            {props.selectPerson[0].mass} kg.
          </p>
        </div>
      ) : (
        <div>
          <h3>Name: No character name</h3>
          <p>Looks like we don't have any information on this character..</p>
        </div>
      )}
    </div>
  );
}

export default CharDescription;
