import { Route, Routes } from 'react-router-dom';
import key from '../../Key'
import { useEffect, useState } from 'react';
import data from '../../data'
import MainDisplay from '../MainDisplay/MainDisplay';
import Transactions from '../Transactions/Transactions';
import github from '../../Images/github.png'
import linkedin from '../../Images/linkedin.png'
import Toggle from 'react-toggle';
import "react-toggle/style.css"

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

  function handleGitHubClick() {
    window.open('https://github.com/nathalia-lt/traderblotter')
  }

  function handleLinkedinClick() {
    window.open('https://www.linkedin.com/in/nathaliatroina/')
  }

  let [lightModeOn, setLightModeOn] = useState(false)

  function handleToggleChange(){
    setLightModeOn(!lightModeOn)
  }

  let toggleText = (lightModeOn ? 'light':'')

  let appClass = 'app ' + toggleText

  let toggleClass = 'toggle ' + toggleText

  return (
    <div className={appClass}>
      <div className='headerContainer' >
        <Toggle
          defaultChecked={!lightModeOn}
          icons={false}
          className={toggleClass}
          onChange={handleToggleChange} />
          <div className='title' >
        <h1>Trader Blotter </h1>
        <img src="https://img.icons8.com/ios/500/000000/graph--v1.png" alt=''/>
          </div>
        <div className='icons' >
          <img className={toggleText} src={github} onClick={handleGitHubClick} alt=''/>
          <img className={toggleText} src={linkedin} onClick={handleLinkedinClick} alt='' />
        </div>
      </div>
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
