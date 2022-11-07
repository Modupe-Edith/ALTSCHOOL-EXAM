import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContextApi } from "../App";

function SingleRepo() {
  const { id } = useParams();
  const { repos } = useContext(MyContextApi);
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    const getSingleRepo = repos.filter((per) => per.id === Number(id));
    setRepo(getSingleRepo);
    console.log("My Single Repo: ", getSingleRepo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      SingleRepo
      <div>{repo?.map(
        (rep) => <section className="repo" key={rep.id}>
          <h4>{rep.name}</h4>
          <p>Visibility: {rep.visibility}</p>
          <p>Description: {rep.description || <small>No Description</small>}</p>
          <p>Forks: {rep.forks} </p>
        </section>
      )}</div>
    </div>
  );
}

export default SingleRepo;
