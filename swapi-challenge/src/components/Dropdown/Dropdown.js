import React from "react";

function Dropdown(props) {
  return (
    <div className="dropdown-wrapper">
      <select onChange={props.selectPerson} className="dropdown-selecter">
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
