/** @format */

import { useAuthContext } from "./useAuthContext";
import { useVideoContext } from "./useVideoContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchVideos } = useVideoContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchVideos({ type: "SET_VIDEO", payload: null });
  };

  return { logout };
};
