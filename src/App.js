import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData]=useState([])
  useEffect(()=>{
    async function callApi(){
      const apiResult= await axios.get('https://raw.githubusercontent.com/techguru123/MoodMob/master/data.json');
      setApiData(apiResult.data);
      
    }
    callApi();
    console.log(apiData);
  }, [apiData])
  return (
    <div className="App">
      <header className="App-header">
       <table>
        <thead>
        <tr>
          <th>Id </th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {
          apiData &&
          (apiData).map((apiDetails,index)=>{

            return(
              <tr key={index}>
                <td>{apiDetails.id}</td>
              </tr>
            )
          })
        }
        </tbody>
       </table>
      </header>
    </div>
    
  );


}

export default App;
