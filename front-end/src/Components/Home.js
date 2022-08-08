import React from "react";
import { SongTable } from "./SongTable";

export const Home = ({songs}) => {
  return (
    <>
      <SongTable songs={songs} />
    </>
  );
};
