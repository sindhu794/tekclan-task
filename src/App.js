import React,{useEffect,useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import RestaurantInfo from './components/RestaurantInfo';
import MainWrapper from './components/MainWrapper';
import Breadcrumbs from './components/Breadcrumbs'

function App() {
  const [darkTheme, setdarkTheme] = useState(false)

  const setTheme = ()=>{
    setdarkTheme(!darkTheme)
  }

  return (
    <div className={"app-wrapper " + (darkTheme && "dark") }>
      <Header setTheme={setTheme} darkTheme={darkTheme}/>
      <Breadcrumbs/>
      <RestaurantInfo/>
      <MainWrapper/>
    </div>
  );
}

export default App;
