import Bitcoin from '../assets/bitcoin-logo.svg';
import Eth from '../assets/eth.svg';
import Binance from '../assets/binance.svg';
import Tron from '../assets/tron.svg';

export function IconFromSymbol (symbolList){
    if(symbolList.includes('BTC')){
        return Bitcoin
    } else if (symbolList.includes('ETH')){
        return Eth
    } else if (symbolList.includes('BNB')){
        return Binance
    } else if (symbolList.includes('TRON')){
        return Tron
    } else {
        return Bitcoin
    }

}

export function TimeConverter(timeStamp){
   const formattedTime = new Date(timeStamp).toLocaleTimeString();
   return formattedTime;


}