/** @format */

import React from "react";
import { useVideoContext } from "../hooks/useVideoContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DoctorPost = ({ video }) => {
  const { dispatch } = useVideoContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      `https://healthdeck.onrender.com/api/videos` + video._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_VIDEO", payload: json });
    }
  };
  return (
    <>
      {video && (
        <>
          <div className="py-2">
            <p className="font-medium text-lg ">Link: {video.link}</p>
            <p className="font-mediumm ">Description: {video.description}</p>
            <p className="font-mediumm ">Tips: {video.tips}</p>
            <p className="font-medim text-sm text-[#727272]">
              ...{" "}
              {formatDistanceToNow(new Date(video.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
          <div className="py-2">
            <span className="text-[#ff6a6a]" onClick={handleClick}>
              Delete
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default DoctorPost;
