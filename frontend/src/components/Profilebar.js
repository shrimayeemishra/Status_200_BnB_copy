/** @format */

import React, { useState, useEffect } from "react";

const ProfileBar = ({ doctor }) => {
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch(
        `https://healthdeck.onrender.com/api/doctors`
      );
      const json = await response.json();

      if (response.ok) {
        setDoctors(json);
      }
    };

    fetchDoctors();
  }, []);
  return (
    <>
      <div className="lg:mx-10 mx-3 my-2 py-2 px-3 border">
        <p className="font-mediumm text-lg ">{doctor.email}</p>
        <p className="font-mediumm ">Contact: {doctor.contact}</p>
        <p className="font-mediumm ">Description: {doctor.description}</p>
        <p className="font-mediumm ">Specialist: {doctor.specialist}</p>
        <p className="font-mediumm ">Address: {doctor.address}</p>
      </div>
    </>
  );
};

export default ProfileBar;
