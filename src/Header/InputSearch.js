import React from "react";

const InputSearch = () => {
  return (
    <form class=" container-md input-search d-flex ">
      <input
        class="outline-secondary m-2 "
        type="search"
        placeholder="Your Movie..."
      ></input>
      <button class="btn-outline-secondary m-2" type="submit">
        Search
      </button>
    </form>
  );
};

export default InputSearch;
