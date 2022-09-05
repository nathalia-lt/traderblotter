import { Route, Routes } from 'react-router-dom';
import key from '../../Key'
import { useEffect, useState } from 'react';
import data from '../../data'

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
  




  return (
    <div>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
