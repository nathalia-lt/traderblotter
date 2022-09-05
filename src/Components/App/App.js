import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  let url = ''

  var myHeaders = new Headers();
myHeaders.append("apikey", "cFuGGwn8ZP42lwL1hIujsq0Vbg9CR5fF");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/latest?symbols={symbols}&base={base}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




  return (
    <div>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
