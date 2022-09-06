import CurrencyCard from "../CurrencyCard/CurrencyCard"



export default function MainDisplay({ data, transactions, setTransactions }) {

    let first = data.rates[2]

    let currencyCardsToDisplay = data.rates.map(currency => {
        return (
            <CurrencyCard
                key={currency.symbol}
                currency={currency}
                buyHistory={[]}
                sellHistory={[]}
                transactions={transactions}
                setTransactions={setTransactions}
            />
        )
    })


    return (
        <div className='mainDisplayContainer'>
            {currencyCardsToDisplay}
        </div>
    )
}