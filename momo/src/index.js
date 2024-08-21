import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './component/header';
import Content from './component/content';
function Main(){
  return( <div>
    <Head/>
    <Content/>
  </div>
  )
}
ReactDOM.render(<Main/>, document.getElementById("root"));
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
