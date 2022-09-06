


export default function MainDisplay({ data }) {

    let first = data.rates[0]
    
    let symbol = first.symbol

    let price = first.price
    


    return (
        <div className='mainDisplayContainer'>
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

        </div>
    )
}