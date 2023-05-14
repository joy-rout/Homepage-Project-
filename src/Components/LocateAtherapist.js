// import { useEffect, useState } from "react";
// import ReactMapGL, { Marker, FlyToInterpolator }
// 	from "react-map-gl";
// import Fly from "./Fly";
// import { ImLocation } from "react-icons/im";
// import "./LocateApp.css";

// function App() {

// // Setting up the state for the latitude
// // and longitude
// const [lat, setLat] = useState(22.5726);
// const [lon, setLon] = useState(88.3639);

// // Setting up the state for the map
// const [viewport, setViewport] = useState({
// 	latitude: lat,
// 	longitude: lon,
// 	zoom: 12,
// 	bearing: 0,
// 	pitch: 0,
// 	width: "100%",
// 	height: "100vh",
// });

// // Map viewport updates whenever the
// // latitude and longitude changes
// useEffect(() => {
// 	setViewport({
// 	latitude: lat,
// 	longitude: lon,
// 	zoom: 12,

// 	transitionDuration: "auto",
// 	width: "100%",
// 	height: "100vh",
// 	});
// }, [lat, lon]);

// return (
// 	<ReactMapGL
// 	mapboxApiAccessToken={"pk.eyJ1IjoiamFubWVqb3kiLCJhIjoiY2xoNXl1YzQyMDB5ZTNjbXA0aTRjN2g3dyJ9.VfMxB9uJlWWQR1Inlq7VSQ"}
// 	{...viewport}
// 	onViewportChange={(viewport) => setViewport(viewport)}
// 	>
// 	<Marker latitude={lat} longitude={lon}>
// 		<ImLocation size="30px" />
// 	</Marker>
// 	<Fly setLat={setLat} setLon={setLon} />
// 	</ReactMapGL>
// );
// }

// export default App;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       });
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   return (
//     <div>
//       {location ? (
//         <p>
//           Latitude: {location.latitude}, Longitude: {location.longitude}
//         </p>
//       ) : (
//         <p>Loading location...</p>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';

const LocateAtherapist = () => {

  const [userLocationDetails, setUserLocationDetails] = useState(null);
  function getUserLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser.'));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  }
  useEffect(() => {
    getUserLocation()
      .then((location) => {
        setUserLocationDetails(location);
  
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => {
            setUserLocationDetails({
              ...userLocationDetails,
              address: data.city,
              country: data.countryName,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [userLocationDetails]);
    
  useEffect(() => {
    getUserLocation()
      .then((location) => {
        setUserLocationDetails(location);
  
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => {
            setUserLocationDetails({
              ...userLocationDetails,
              address: data.city,
              country: data.countryName,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
      {userLocationDetails && (
        <div>
          <p>Latitude: {userLocationDetails.latitude}</p>
          <p>Longitude: {userLocationDetails.longitude}</p>
          <p>Address: {userLocationDetails.address}</p>
          <p>Country: {userLocationDetails.country}</p>
        </div>
      )}
    </div>
  );
  
}

export default LocateAtherapist