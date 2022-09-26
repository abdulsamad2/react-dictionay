import React from "react";
import Result from "./component/Result";
import Header from "./component/Header";
import SearchForm from "./component/SearchForm";

function App() {
  const [search, setSearch] = React.useState("dictionary");
  const [result, setResult] = React.useState();
  function formData(data) {
    setSearch(data);
  }
  React.useEffect(() => {
    if (search === undefined) return;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          alert("this is not a word");
        }
      })
      .then((data) => data && setResult(data));
  }, [search]);

  return (
    <div className="flex flex-col ">
      <div className="h-screen">
        <Header />
        <div className="px-10 md:px-0">
          <SearchForm dataForward={formData} />
          {result === undefined ? (
            <div className="container mx-auto max-w-lg">
              Search the word to see meaning and usage
            </div>
          ) : (
            <Result data={result} />
          )}
        </div>
      </div>
      <div className="bg-cyan-700 text-center text-xl capitalize text-white py-2 -mt-[29%] md:-mt-[3%]">
        Created with ❤️ By AbdulSamad
      </div>
    </div>
  );
}

export default App;
