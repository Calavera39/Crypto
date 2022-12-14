import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import {ThemeProvider} from './context/ThemeContext'
import Account from "./routes/Account";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import axious from 'axios'
import CoinPage from './routes/CoinPage'
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import {useNavigate} from 'react-router-dom'


function App() {
  const [coins, setCoins] = useState([])
  const [quantity, setQuantity] = useState(10)
  const navigate = useNavigate()

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${quantity}&page=1&sparkline=true`

  useEffect(() => {
    axious.get(url).then((response) => {
      navigate('/')
      setCoins(response.data)
      console.log(response.data)

    })
    }, [url])

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home quantity={quantity} setQuantity={setQuantity} coins={coins} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId"/>
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
