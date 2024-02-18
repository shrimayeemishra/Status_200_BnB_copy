/** @format */

import { useState, useEffect } from "react";
import { useVideoContext } from "../hooks/useVideoContext";
import { useAuthContext } from "../hooks/useAuthContext";

const VideoAdd = () => {
  const { dispatch } = useVideoContext();
  const { user } = useAuthContext();

  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tips, setTips] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const video = { link, description, tips };

    const response = await fetch(`https://healthdeck.onrender.com/api/videos`, {
      method: "POST",
      body: JSON.stringify(video),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setLink("");
      setDescription("");
      setTips("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_VIDEO", payload: json });
    }
  };

  return (
    <form
      className="border  bg-white md:px-20 px-6 py-10"
      onSubmit={handleSubmit}
    >
      <h3 className="title text-2xl font-bold py-5">Add a New Video</h3>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Video Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className={
            emptyFields.includes("title")
              ? "error"
              : "border-b-2 outline-none hover:border-black"
          }
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={
            emptyFields.includes("load")
              ? "error"
              : "border-b-2 outline-none hover:border-black"
          }
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Tips:</label>
        <input
          type="text"
          value={tips}
          onChange={(e) => setTips(e.target.value)}
          className={
            emptyFields.includes("reps")
              ? "error"
              : "border-b-2 outline-none hover:border-black"
          }
        />
      </div>

      <button className="button my-4 py-2 px-6 rounded-sm font-bold text-md bg-[#2ec95e] hover:bg-[#6df897]">
        Post Video
      </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default VideoAdd;
