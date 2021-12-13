import React from "react";
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "../pages/CharacterDetails";
import Home from "../pages/Home";

const CustomizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:characterId" element={<CharacterDetails />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default CustomizedRoutes;
