import React from "react";

function Dropdown(props) {
  return (
    <div>
      <select onChange={props.selectPerson}>
        <option value="Jacob Fenwick">Jacob Fenwick</option>
        {props.swPeople.map(person => (
          <option key={person.name} value={person.name}>
            {person.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
