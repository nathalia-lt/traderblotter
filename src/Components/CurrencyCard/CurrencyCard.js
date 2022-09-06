

export default function CurrencyCard( { currency } ){

    let symbol = currency.symbol

    let price = currency.price
    

    return(
        <div className='currencyCard' >  
                <div className='currencyName'> {symbol}</div>
                <div className='currencyPrice'>
                    <div className='buy side' > {price} </div>
                    <div className='sell side' > {price} </div>
                </div>

                <div className='currencyFluctuation'> 
                <div className='fluctuation'> H: 1.67899 </div>
                <div className='fluctuation'> L: 1.67899 </div>
                </div>

            </div>

    )
}