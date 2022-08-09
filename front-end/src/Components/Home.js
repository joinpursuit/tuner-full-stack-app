import React from "react";
import { SongTable } from "./SongTable";
import { CustomizedSnackbars } from "./Sandbox";

export const Home = ({ songs }) => {
  return (
    <>
      <SongTable songs={songs} />
    </>
  );
};
