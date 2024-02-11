import React, { useState, useEffect } from "react";
import "./CardComponent.css";

const CardComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={`font-sans antialiased leading-normal tracking-wider ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "#edf3fa;; text-gray-900"
      }`}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="relative overflow-hidden rounded-lg shadow-lg shadow-blue-400">
          <div className="flex flex-col rounded-lg bg-white md:max-w-xl md:flex-row  p-6 ">
            <div className="image-cont">
              <img src={userData.picture.large} alt="" />
            </div>
            <div class="user-info-container">
              <h5 class="user-name">{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</h5>
              <p class="user-info">
                <span class="label">Email:</span> {userData.email}
              </p>
              <p class="user-info">
                <span class="label">Gender:</span> {userData.gender}
              </p>
              <p class="user-info">
                <span class="label">Phone:</span> {userData.phone}
              </p>
              <p class="user-info">
                <span class="label">Cell:</span> {userData.cell}
              </p>
              <p class="user-info">
                <span class="label">Location:</span> {userData.location.city},{" "}
                {userData.location.country}
              </p>
              <p class="user-info">
                <span class="label">Date of Birth:</span> {userData.dob.date}
              </p>
              <p class="user-info">
                <span class="label">Registered:</span>{" "}
                {userData.registered.date}
              </p>
              <p class="user-info">
                <span class="label">Nationality:</span> {userData.nat}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="focus:outline-none" onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
