import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import axios from 'axios';
import Header from '../components/Header';


function Dashboard() {
const baseUrl = 'https://api.binance.com/api/v3/ticker?symbols=["BTCUSDT","ETHUSDT","TRXUSDT","BNBUSDT"]';
    const [data, setData] = useState([])
    useEffect(()=>{
 const fetchData = async ()=> {
            try {
                const response = await axios.get(baseUrl);
                setData(response.data)
                console.log('response',response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        },3600000)
       return () => {
        clearInterval(interval)
       }
        
    },[])
  return (
    <div><Header/><Card data={data}/></div>
 
  )
}

export default Dashboard