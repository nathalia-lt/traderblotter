import { Route, Routes } from 'react-router-dom';
import key from '../../Key'

function App() {

  let url = ''

  var myHeaders = new Headers();
myHeaders.append("apikey", key);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/latest", requestOptions)
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
