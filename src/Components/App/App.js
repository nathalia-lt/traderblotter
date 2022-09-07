import { Route, Routes } from 'react-router-dom';
import key from '../../Key'
import { useEffect, useState } from 'react';
import data from '../../data'
import MainDisplay from '../MainDisplay/MainDisplay';


function App() {


  //   let url = "https://api.apilayer.com/fixer/latest?base=usd"

  //   let [data, setData] = useState([])

  //   var myHeaders = new Headers();
  // myHeaders.append("apikey", key);

  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow',
  //   headers: myHeaders
  // };
  // useEffect(() => { //useEffect does not let fetch run none stop
  // fetch(url, requestOptions)
  //   .then(response => response.json()) //response is what we get from fetch and we turn it into json that is readeable
  //   .then(result => console.log(result)) //result of the response.json //here we need to keep that data that response.json is given
  //   .catch(error => console.log('error', error));
  // },[])


  let [transactions, setTransactions] = useState([])


  let transactionsToDisplay = transactions.sort((tx1, tx2) => tx2.id - tx1.id ).map(transaction => {
    return (
      <tr>
        <td>{transaction.currency}</td>
        <td>{transaction.price}</td>
        <td>{transaction.status}</td>
        <td>{transaction.side}</td>
        <td>{transaction.date}</td>
      </tr>
    )
  })

  return (
    <div className='app'>
      <div className='allCurrencies' >
        <MainDisplay
          data={data}
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
      <div className='transactions' >
        <table>
          <thead>

            <tr>
              <th>Currency</th>
              <th>Price</th>
              <th>Status</th>
              <th>Side</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionsToDisplay}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
