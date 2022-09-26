import React from "react";

function Result(props) {
  const data = props.data[0];

  return (
    <div className="container mx-auto max-w-lg mt-8">
      <div className="divide-y-2 space-y-3">
        <h3 className="">Meaning of {data.word} ➡️</h3>
        <h2 className="font-medium text-xl ">
          {data.word}
          <span className="font-thin px-4">
            {data.meanings[0].partOfSpeech}
          </span>
        </h2>

        <h2 className="font-semibold italic">
          {data.meanings[0].definitions[0].definition}
        </h2>
        <h2 className="text-bold">synonyms</h2>
        <h2 className="font-semibold italic">
          <div>{data.meanings[0].synonyms[0]}</div>
          <div>{data.meanings[0].synonyms[1]}</div>
          <div>{data.meanings[0].synonyms[2]}</div>
        </h2>
      </div>
    </div>
  );
}

export default Result;
