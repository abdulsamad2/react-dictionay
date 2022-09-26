import React from "react";

function SearchForm(props) {
  const [search, setSearch] = React.useState();
  function submitHandler(e) {
    e.preventDefault();
    props.dataForward(search);
  }
  function changeHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="container mt-4 mx-auto max-w-md">
      <form
        className="flex flex-col md:flex-row justify-center"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="px-4 py-2 bg-slate-300 min-w-full "
          placeholder="Search For any word"
          name="search"
          onChange={changeHandler}
        ></input>
        <button type="submit" className="px-4 py bg-cyan-600 text-white">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
