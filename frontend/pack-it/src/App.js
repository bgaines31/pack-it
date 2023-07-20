import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllTrips } from './views/AllTrips/AllTrips';
import { PackingList } from './views/PackingList/PackingList';
function App() {
  const [trips, setTrips] = useState([]);

  async function fetchTrips() {
    try {
      const response = await fetch('http://localhost:3002');
      const tripsData = await response.json();
      // console.log('results: ', tripsData);

      setTrips(tripsData);
    } catch (err) {
      console.log('Oh no an error :/! ', err);
    }
  }

  useEffect(() => {
    fetchTrips();
  }, []);
  console.log(trips);
  return (
    <>
      <BrowserRouter>
        <Navbar trips={trips} />
        <Routes>
          <Route path="/" element={<AllTrips trips={trips} />} />
          {/* <Route path="/home" element={<Home recipes={recipes} />} /> */}
          <Route path="/trips" element={<AllTrips trips={trips} />} />
          <Route path="/:id/packingList" element={<PackingList trips={trips}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
