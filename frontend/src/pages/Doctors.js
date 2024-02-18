/** @format */

import React, { useEffect, useState } from "react";
import ProfileBar from "../components/Profilebar";

const GetDoctors = () => {
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
      {doctors &&
        doctors.map((doctor) => (
          <ProfileBar key={doctor._id} doctor={doctor} />
        ))}
    </>
  );
};

export default GetDoctors;
