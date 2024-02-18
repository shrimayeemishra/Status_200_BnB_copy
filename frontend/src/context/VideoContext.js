/** @format */

import { createContext, useReducer } from "react";

export const VideoContext = createContext();

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEO":
      return {
        videos: action.payload,
      };
    case "CREATE_VIDEO":
      return {
        videos: [action.payload, ...state.videos],
      };
    case "DELETE_VIDEO":
      return {
        videos: state.videos.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, {
    videos: [],
  });

  return (
    <VideoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
