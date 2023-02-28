import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { SearchHero, Hero, MarvelPage, DcPage } from "../pages";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />

          <Route path="/search" element={<SearchHero />} />
          <Route path="/hero/:id" element={<Hero />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
