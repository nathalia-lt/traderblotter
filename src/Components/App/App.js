import { Route, Routes } from 'react-router-dom';
import key from '../../Key'
import { useEffect, useState } from 'react';
import data from '../../data'
import MainDisplay from '../MainDisplay/MainDisplay';
import Transactions from '../Transactions/Transactions';
import Header from '../Header/Header';


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


  let [lightModeOn, setLightModeOn] = useState(false)

  function handleToggleChange() {
    setLightModeOn(!lightModeOn)
  }

  let toggleText = (lightModeOn ? 'light' : '')
  let toggleTextAlt = (lightModeOn ? '' : 'light' )

    let appClass = 'app ' + toggleText

  let toggleClass = 'toggle ' + toggleText

  


  return (
    <div className={appClass}>
        <Header
        toggleClass={toggleClass}
        lightModeOn={lightModeOn}
        handleToggleChange={handleToggleChange}
        toggleTextAlt={toggleTextAlt}
        />
      <div className={'allCurrencies ' + toggleText} >
        <MainDisplay
          data={data}
          transactions={transactions}
          setTransactions={setTransactions}
          toggleText={toggleText}
        />
      </div>
      <Transactions
        transactions={transactions}
        toggleText={toggleText}

      />
    </div>
  );
}

export default App;
