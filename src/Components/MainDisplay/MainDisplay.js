import CurrencyCard from "../CurrencyCard/CurrencyCard"



export default function MainDisplay({ data }) {

    let first = data.rates[2]
    
    


    return (
        <div className='mainDisplayContainer'>
            {/* Im gonna take all of the elements I made for currency card, copy and paste into the currency card component and create a component here */}
            <CurrencyCard
                currency={first}
                buyHistory={[]}
                sellHistory={[]}
            />
        </div>
    )
}