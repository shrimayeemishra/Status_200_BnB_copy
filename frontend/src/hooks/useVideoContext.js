/** @format */

import { VideoContext } from "../context/VideoContext";
import { useContext } from "react";

export const useVideoContext = () => {
  const context = useContext(VideoContext);

  if (!context) {
    throw Error(
      "useVideoContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
