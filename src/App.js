import { createContext, useState, useEffect } from "react";
import axios from "axios";

import Search from "./Search.js";
import Sorting from "./Sorting.js";
import User from "./User.js";
import { compileUserInfo } from "./utils.js";

import "./styles.css";

export const AppContext = createContext(null);

export default function App() {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [sortParam, setSortParam] = useState("first");
  const [sortDir, setSortDir] = useState("asc");
  const [search, setSearch] = useState("");

  const initializeUserData = () => {
    console.log("LOADING");
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      setUsers(response.data.results.map(compileUserInfo));
    });
  };

  const processUserData = () => {
    const stringSearch = search.toLocaleLowerCase();

    setMatches(
      users
        .filter((user) => {
          return user.searchString.indexOf(stringSearch) > -1;
        })
        .sort((a, b) => {
          if (sortDir === "asc") {
            return a[sortParam] > b[sortParam] ? 1 : -1;
          } else {
            return a[sortParam] < b[sortParam] ? 1 : -1;
          }
        })
    );
  };

  useEffect(initializeUserData, []);
  useEffect(processUserData, [search, sortParam, sortDir, users]);

  return (
    <div className="App">
      <p className="left">
        <a href="https://www.linkedin.com/in/chris-wilson-66b59919/">
          Christopher Wilson
        </a>
      </p>
      <h1>Company Directory Code Test</h1>
      <p>Search Users, Order Results and Edit Information</p>
      <AppContext.Provider
        value={{
          search,
          setSearch,
          sortParam,
          setSortParam,
          sortDir,
          setSortDir
        }}
      >
        <div>
          <Search />
          <Sorting />
        </div>
        <div className="user-grid">
          {matches.map((user) => (
            <User key={user.uuid} user={user} />
          ))}
        </div>
      </AppContext.Provider>
    </div>
  );
}
