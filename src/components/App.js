import React from 'react';
import {Route, Routes} from "react-router-dom";
import BoardPage from './views/BoardPage/BoardPage';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<BoardPage />} />
      </Routes>
    </div>
  )
}

export default App;