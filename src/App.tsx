import React from 'react';
import './App.css';

import { Home, Email, Tweets, ProductDescription,Nav} from './components';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Display from './components/Display';


const App: React.FC = () => {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="email" element={<Email />} />
    
        <Route path="tweets" element={<Tweets />} />
        <Route path="display" element={<Display  />} />
        <Route path="products" element={<ProductDescription  />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
