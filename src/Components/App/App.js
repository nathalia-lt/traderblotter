import { Route, Routes } from 'react-router-dom';
import key from '../../Key'
import { useEffect, useState } from 'react';
import data from '../../data'
import MainDisplay from '../MainDisplay/MainDisplay';
import Transactions from '../Transactions/Transactions';
import Header from '../Header/Header';
import News from '../News/News';


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


  let [lightModeOn, setLightModeOn] = useState(true)

  function handleToggleChange() {
    setLightModeOn(!lightModeOn)
  }

  let toggleText = (lightModeOn ? 'light' : '')
  let toggleTextAlt = (lightModeOn ? '' : 'light')

  let appClass = 'app ' + toggleText

  let toggleClass = 'toggle ' + toggleText


  let [news, setNews] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };
  useEffect(() => {
    fetch('https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=economics&lang=en&media=True', options)
      .then(response => response.json())
      .then(response => setNews(response))
      .catch(err => console.error(err));
  }, [])



  return (
    <div className={appClass}>
      <Header
        toggleClass={toggleClass}
        lightModeOn={lightModeOn}
        handleToggleChange={handleToggleChange}
        toggleTextAlt={toggleTextAlt}
      />
      <div className='home' >
        <div className='leftSide' >
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
        <div className={'rightSide ' + toggleText} >
          <News
            news={news}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
