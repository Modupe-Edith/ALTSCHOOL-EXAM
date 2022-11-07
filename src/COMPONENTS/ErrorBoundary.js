import React, { useState, useContext } from "react";
import { MyContextApi } from "../App";

function Bomb() {
  throw new Error("💥 CABOOM 💥");
}
function NotAPerson({name}) {
  if (name === "Judas" || name === "judas") {
    throw new Error("Not A Person");
  }
}

function ErrorBound() {
  const { explode, setExplode } = useContext(MyContextApi);
  const [person, setPerson] = useState("");
  return (
    <div>
      Error Boundary
      <button onClick={() => setExplode((e) => !e)}>toggle explode</button>
      {explode ? <Bomb /> : null}
      <div>
        <label>Name:</label>
        <p><small>Don't type in "Judas"</small></p>
        <input
          type="text"
          name="person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        ></input>
        <NotAPerson name={person}/>
       <p>
        <small>{person}, you are an human</small>
        </p> 
      </div>
    </div>
  );
}

export default ErrorBound;
