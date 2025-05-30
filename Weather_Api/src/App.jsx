import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import Result from './components/Result'
import axios from 'axios'

function App(){

  const [search, setSearch] = useState('');
  const [wheather,setWheather] = useState([]);
  const [history, setHistory] = useState([]);

  const changeSearch= (value)=>{
    setSearch(value);
  }

  const searchWhetherHandler = ()=>{
    if(search !==''){
      axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2719a63d83021a74c4ca23303e06bc8c&units=metric`
         `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe4a907de4b934734c10c55a193b6206&units=metric`
      ).then(
        (response)=>{ 
          if(history.indexOf(search)===-1){
            setHistory([...history,search])
          }
          console.log(response.data)
          setWheather(response.data)
        }
      
      ).catch((error)=>{
        console.log(error);
      })
    }
  }
  //  searchWhetherHandler();
  
  const historySearchHandler= async(data)=>{
    await setSearch(data);
    if(data !==''){
      axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=2719a63d83021a74c4ca23303e06bc8c&units=metric`
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=fe4a907de4b934734c10c55a193b6206`
      ).then(
        (response)=>{ 
          if(history.indexOf(data)===-1){
            setHistory([...history,data])
          }
          console.log(response.data)
          setWheather(response.data)
        }
      
      ).catch(()=>{
        console.log(error);
      })
    }
  }



  return (
    <>
      <div className='container  bg-gray-400 mt-3 m-auto py-11 rounded-2xl'>
      <Search changeSearch={changeSearch} searchData={search} searchWheather={searchWhetherHandler} />
      <Result wheatherData={wheather} history={history} historySearchHandler={historySearchHandler}/>
      </div>
    </>
  )
}

export default App
