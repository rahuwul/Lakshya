import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const observer= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add("show");
      }
      else{
          entry.target.classList.remove("show");
      }
  })
});
const hiddenElements=document.querySelectorAll('.noshow');
hiddenElements.forEach((el)=>observer.observe(el));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
