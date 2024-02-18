/** @format */

import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [description, setDescription] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [address, setAddress] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form
      className="signup absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white md:px-20 px-6 py-10"
      onSubmit={handleSubmit}
    >
      <h3 className="title text-2xl font-bold py-5">Sign Up</h3>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Email address:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Password:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Full Name:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Contact:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Description:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Specialist:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="text"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Address:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        className="button my-4 py-2 px-6 rounded-sm font-bold text-md bg-[#2ec95e] hover:bg-[#6df897]"
        disabled={isLoading}
      >
        Sign up
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
