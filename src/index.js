import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import Menu from "./Menu";
import MenuProvider from 'react-flexible-sliding-menu';

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider Menu={Menu} >
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

WebFont.load({
  google: {
    families: ['Montserrat Web:400,700', 'Roboto', 'sans-serif']
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





