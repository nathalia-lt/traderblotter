import { useEffect, useState } from "react"


export default function CurrencyCard({ currency, buyHistory, sellHistory }) {

    let symbol = currency.symbol

    let price = currency.price

    // We need the length of the original number in order to keep the formatting consistent when we randomize the difference 
    let priceLength = price.toString().length

    // We need to randomly decide what will be bigger (the buy or the sell price)
    let coinFlip = Math.random()
    let sign = 1
    if (coinFlip > .5) {
        sign = -1
    }

    // Generating a random difference between the buy and the sell prices
    // There are prices with differing sizes (EX: 1, 15, 400) so we need to account for that when creating the difference
    // Find the decimal location, and use the length of the number (pre decimal if the number is > 1) 
    // to find a reasonable amount to vary each time the number if updated
    // the amount we vary by has to start at the fourth non zero number
    let splitDecimals = price.toString().split('.')
    let preDecimals;
    let decimalLocation;
    let count = 0;


    if (price > 1) {
        preDecimals = splitDecimals[0]
        decimalLocation = -3 + preDecimals.length
    } else { // if the number is less than 1, we need to find out how many zeros come after the decimal point
        preDecimals = splitDecimals[1]
        for (let char of preDecimals) {
            if (char === '0') {
                count += 1
            } else {
                break
            }
        }
        decimalLocation = -3 - count
    }

    // multiply by the sign variable we made above to determine if the buy or sell price will be higher
    let [diff, setDiff] = useState((sign * Math.random() * (10 ** decimalLocation) / 2))
    let buyPrice = (price + diff).toString().slice(0, priceLength)
    let sellPrice = (price - diff).toString().slice(0, priceLength)

    let buyPriceStart = buyPrice.slice(0, 4 + count)
    let buyPriceMiddle = buyPrice.slice(4 + count, 6 + count)
    let buyPriceEnd = buyPrice.slice(6 + count,)

    let sellPriceStart = sellPrice.slice(0 + count, 4 + count)
    let sellPriceMiddle = sellPrice.slice(4 + count, 6 + count)
    let sellPriceEnd = sellPrice.slice(6 + count,)

    // add the numbers to our buy and sell history to calculate the min/max and arrow direction
    buyHistory.push(buyPrice)
    sellHistory.push(sellPrice)

    let max = Math.max(...buyHistory, ...sellHistory)
    let min = Math.min(...buyHistory, ...sellHistory)


    // we need a variable to determine wether or not the latest buy/sell price is increasing/decreasing compared to the previous price
    let [buyArrowIncreasing, setBuyArrow] = useState(true)
    let [sellArrowIncreasing, setSellArrow] = useState(true)

    // ternaries to change what is being displayed
    let displayBuyArrow = buyArrowIncreasing ? '↑' : '↓'
    let displayBuyArrowClass = buyArrowIncreasing ? 'up' : 'down'
    let displaySellArrow = sellArrowIncreasing ? '↑' : '↓'
    let displaySellArrowClass = sellArrowIncreasing ? 'up' : 'down'

    useEffect(() => {
        // this interval inside of the useEffect will run every 2.5 seconds and will calculate a new randomized difference for the prices
        setInterval(() => {
            let newDiff = sign * Math.random() * (10 ** decimalLocation) / 2
            let newBuyPrice = (price + newDiff).toString().slice(0, priceLength)
            let newSellPrice = (price - newDiff).toString().slice(0, priceLength)
            setDiff(newDiff)

            // calculate and update the arrow directions based on the comparison of the new buy/sell price to the last one added to their history
            if (newBuyPrice > buyHistory[buyHistory.length - 1]) {
                setBuyArrow(true)
            } else {
                setBuyArrow(false)
            }

            if (newSellPrice > sellHistory[sellHistory.length - 1]) {
                setSellArrow(true)
            } else {
                setSellArrow(false)
            }

        }, 2.5 * 1000)

    }, [])

    function truncateDecimals(num, digits) {
        let numS = num.toString(),
            decPos = numS.indexOf('.'),
            substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
            trimmedResult = numS.substr(0, substrLength),
            finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

        return parseFloat(finalResult);
    }


    let spread = (diff) / ((Number(buyPrice) + Number(sellPrice))/2) * 100
    let roundedSpread = truncateDecimals(spread,2)

    let spreadSign = roundedSpread >= 0 ? '+ ' : ''
    let spreadClass = roundedSpread >= 0 ? 'up' : 'down'

    return (
        <div className='currencyCard' >
            <div className='currencyName'>
                <div> USD{symbol} </div>
            </div>
            <div className='currencyPrice'>
                <div className='buy side' >
                    <div className='bidAsk' > <div>BID</div> </div>
                    <div className='mainPrice' >
                    <div><span className={displayBuyArrowClass}>{displayBuyArrow} </span> {buyPriceStart}<span className="targetNumbers">{buyPriceMiddle}</span>{buyPriceEnd}</div>
                    </div>
                </div>
                <div className='sell side' >  
                <div className='bidAsk' >  <div>ASK</div>  </div>
                <div className='mainPrice' >
                <div> <span className={displaySellArrowClass}>{displaySellArrow}</span> {sellPriceStart}<span className="targetNumbers">{sellPriceMiddle}</span>{sellPriceEnd} </div>
                </div>
                </div>
            </div>

            <div className='currencyFluctuation'>
                <div className='fluctuation'> H: {max} </div>
                <div className={spreadClass}> {spreadSign}{roundedSpread}</div>
                <div className='fluctuation'> L: {min} </div>
            </div>

        </div>

    )
}