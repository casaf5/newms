import axios from 'axios';
export const BitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}


async function getRate(dollars = 1) {
    const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${dollars}&cors=true`);
    return rate.data;
}

async function getMarketPrice() {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true`)
        const data = res.data.values.map(val => val.y)
        return data
    }
    catch {
        console.log('Error!')
    }
}

async function getConfirmedTransactions() {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=2months&format=json&cors=true`)
        const data = res.data.values.map(val => val.y)
        return data
    }
    catch {
        console.log('Error!')
    }
}
