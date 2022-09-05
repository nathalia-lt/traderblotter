


export default function MainDisplay({ data }) {

    let first = data.rates[0]
    console.log(first)



    return (
        <div className='mainDisplayContainer'>
            <div className='currencyCard' >
                <div className='currencyName'> BRL</div>
                <div className='currencyPrice'>
                    <div className='buy side' >hey there</div>
                    <div className='sell side' > hey you</div>
                </div>

                <div className='currencyFluctuation'> 1.67899 </div>

            </div>

        </div>
    )
}