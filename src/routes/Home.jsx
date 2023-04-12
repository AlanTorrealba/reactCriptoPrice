import React from "react";
// import Navbar from "../components/Navbar";
import TableCoin from "../components/TableCoin";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [coin, setCoins] = useState([])
 
  const getData = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
  console.log(res.data)
  setCoins(res.data)
  }
   useEffect(()=>{
    getData()
   }, [])
 
  return (
    <div>
      {/* <Navbar /> */}
      <div class="container">
         <TableCoin coins ={coin}/>
      
      </div>
    </div>
  );
}

export default Home;
