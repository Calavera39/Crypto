import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import {ThemeProvider} from './context/ThemeContext'
import Account from "./routes/Account";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import axious from 'axios'

function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  useEffect(() => {
    axious.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    })
    }, [url])

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
