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
  let toggleTextAlt = (lightModeOn ? '' : 'light')

  let appClass = 'app ' + toggleText

  let toggleClass = 'toggle ' + toggleText


  // let [news, setNews] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };
  // useEffect(() => {
  //   fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=Elon%20Musk&lang=en&sort_by=relevancy&page=1&media=True', options)
  //     .then(response => response.json())
  //     .then(response => setNews(response))
  //     .catch(err => console.error(err));
  // }, [])

  // let first = news.articles[0]// I am going to find the first index.
  let first = {
    "summary": "As the richest man on the planet, Elon Musk could buy a heck of a lot of things. Combine that with the way that acquiring video game studios and publishers is trending right now, and it's easy to imagine a world where Musk buys Fortnite. So is Epic Games selling Fortnite to Elon Musk? Here's the need-to-know info on this potential transaction.Will Elon Musk buy Fortnite?Elon Musk is unlikely to buy Fortnite.While Musk has embraced the memes themed around him buying the game, it would be surprising to see the Tesla CEO and SpaceX chief engineer investing in the popular battle royale game.Aside from the memes, there have been no mentions of Musk seriously considering buying Fortnite, nor any talk of Epic Games looking to sell.Why are people saying that Elon Musk is buying Fortnite?Following news of him looking to buy Twitter, the 'Elon Musk Buys' meme quickly grew in popularity.Saying that Elon Musk is buying Fortnite is just supposed to be a funny joke.In more credible Fortnite news, the new Rainbow Royale event supports a leak that a Lady Gaga concert is coming soon. Speaking of crossovers, a Fortnite Teen Titans collab is expected to feature Starfire. As for Deadpool, who remains a fan-favorite skin, here's the latest on when the Marvel anti-hero is expected to make a return.",
    "country": "US",
    "author": "Mack Ashworth",
    "link": "https://www.gamerevolution.com/guides/714211-is-elon-musk-really-buying-fortnite-2022",
    "language": "en",
    "media": "https://cdn-www.gamerevolution.com/assets/uploads/2022/09/is-elon-musk-buying-fortnite.jpg",
    "title": "Is Elon Musk Really Buying Fortnite?",
    "media_content": [
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/08/Two-Point-Campus-Box-Art.jpg",
        "https://www.gamerevolution.com/wp-content/themes/gamerevolution-2018/images/svg/menu_brightness_icon.svg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/07/saints-row-2022-box.jpeg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/08/Pokemon-Scarlet-and-Pokemon-Violet-Double-Pack.jpeg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/08/cotl-box.jpg",
        "https://sb.scorecardresearch.com/p?c1=2&c2=6036161&cv=3.6.0&cj=1",
        "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/08/81l41iKPF3L._SL1500_.jpg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/08/dreamlight-valley-box.jpg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/07/300.jpeg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2020/12/fortnite.jpg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/07/stray-game-box-art.jpg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/09/logo_gr_original.svg",
        "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20360'%3E%3C/svg%3E",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/08/Rollerdrome-PS5-cover.jpg",
        "https://cdn-www.gamerevolution.com/assets/uploads/2022/09/is-elon-musk-buying-fortnite.jpg"
    ],
    "clean_url": "gamerevolution.com",
    "rights": "gamerevolution.com",
    "rank": 13592,
    "topic": "gaming",
    "published_date": "2022-09-05 20:09:31",
    "_id": "467c6d558319749f1e1ec85cd0c1a76f",
    "_score": 24.11127,
    "original_source": "https://www.gamerevolution.com/feed"
}

  function handleHeadlineClick(){
    window.open(first.link)
  }

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
        <div className='rightSide' >
          <div className='newsTitle' >Latest News</div>
          <div className='newsCard'>
            <div className='author'> {first.author} </div>
            <div className='headline' onClick={handleHeadlineClick} > {first.title} </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default App;
