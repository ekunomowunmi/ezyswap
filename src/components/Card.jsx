import React, {useEffect, useState} from 'react'
import bitcoinIcon from '../assets/bitcoin-logo.svg'
import ethIcon from '../assets/eth.svg'
import CardStyle, { Column, Container } from './Styles'
import { CardWrapper } from './Styles';
import { IconFromSymbol, TimeConverter } from '../utility/utility';
function Card({data}) {


    const mockData = [
    {
        icon:bitcoinIcon,
        price: 50,
        time: "2:00pm",
        percentage: "20%",
        symbol: "BTCUSDT"
    },
    {
        icon:ethIcon,
        price: 40,
        time: "2:40pm",
        percentage: "20.2%",
        symbol: "ETHUSDT"
    },
]

  return (
    <div>
        <h1 className='title'>EazySwap</h1>
        <Container >{data.map((data,index)=>{
            const prevPrice = +data.lastPrice + +data.priceChange
        return (
            <Column sm={12} md={6} lg={4} xl={3} key={index}>
                <CardStyle price={data.lastPrice} icon={IconFromSymbol(data.symbol)} percentage={data.priceChangePercent} symbol={data.symbol} time={TimeConverter(data.closeTime)} prevPrice={prevPrice} />
            </Column>
        )
    })}</Container>
    </div>
  )
}

export default Card