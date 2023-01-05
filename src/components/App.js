//App.js
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './views/BoardPage/Home';
import ArticlePage from './views/ArticlePage/ArticlePage';
import RegisterPage from './views/RegisterPage/RegisterPage';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/article/:articleId" element={<ArticlePage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App;