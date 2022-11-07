import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MyContextApi } from "../App";

function MyRepos() {
  const { repos, setRepos } = useContext(MyContextApi);

  const fetchRepos = async () => {
    try {
      const result = await axios(
        "https://api.github.com/users/Modupe-Edith/repos"
      );
      console.log("My Result: ", result.data);
      setRepos(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRepos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h4>My Repositories From GitHub</h4>
      {repos?.map((rep) => (
        <section className="repo" key={rep.id}>
          <h4>{rep.name}</h4>
          <p>{rep.id}</p>
          <p>{rep.forks}</p>
          <p>{rep.visibility}</p>
          <p>
            <Link to={`/myrepos/${rep.id}`}>More Details</Link>
          </p>
        </section>
      ))}
    </main>
  );
}

export default MyRepos;
