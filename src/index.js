import 'purecss/build/pure.css'
import React from 'react';
import { render } from "react-dom";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Home from './Home';
import Author from './Author';
import Post from './Post';
import Tags from './Tags';
import Cat from './Cat';

import reportWebVitals from './reportWebVitals';



render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        </Route>
        <Route path="/post" element={<App />}>
        </Route>
        <Route path="/author/:id" element={<Author />}/>
        {/* <Route path="/author/:id" element={<Author />}/> */}
        <Route path="/tags/:id" element={<Tags />}/>
        <Route path="/categories/:id" element={<Cat />}/>


        <Route path="/post/:id" element={<Post />}/>
        
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
