import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//document.body.style.backgroundColor = "#FFFC33";
document.body.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/613/152/HD-wallpaper-pokemon-pokeball-pokemon.jpg')";
//document.body.style.background = "url('https://w0.peakpx.com/wallpaper/613/152/HD-wallpaper-pokemon-pokeball-pokemon.jpg') no-repeat center";
//document.body.style.backgroundSize = "cover";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
