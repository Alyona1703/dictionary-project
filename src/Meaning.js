import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="definition">
        <p>{props.meaning.definition}</p>
      </div>

      {props.meaning.example && (
        <div className="example">
          <p>
            <em>{props.meaning.example}</em>
          </p>
        </div>
      )}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
