import React from "react";
import HeroList from "../components/HeroList";

const MarvelPage = () => {
  return (
    <>
      <h1>Marvel</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};

export default MarvelPage;
