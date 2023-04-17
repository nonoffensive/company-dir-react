import { useContext } from "react";
import { AppContext } from "./App.js";

export default function Search() {
  const { setSearch } = useContext(AppContext);

  const onSearchInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Users..."
        onInput={onSearchInput}
      />
    </>
  );
}
