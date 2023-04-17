import { useContext } from "react";
import { AppContext } from "./App.js";

export default function Sorting() {
  const { setSortParam, sortDir, setSortDir } = useContext(AppContext);

  const onChangeSortParam = (event) => {
    setSortParam(event.target.value);
  };

  const onChangeSortDir = (event) => {
    setSortDir(sortDir === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <select onChange={onChangeSortParam}>
        <option value="first">First Name</option>
        <option value="last">Last Name</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="cell">Cell</option>
        <option value="street">Address</option>
        <option value="city">City</option>
        <option value="state">State</option>
        <option value="postcode">Postcode</option>
        <option value="country">Country</option>
      </select>
      <button onClick={onChangeSortDir}>{sortDir}</button>
    </>
  );
}
