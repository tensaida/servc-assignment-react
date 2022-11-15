import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getList } from './api/pokemons.api'
import Post from './components/Post'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Details from './components/Details'

export default function App() {
  return (
    <Router>
      <div>
        <nav className="top">
          <ul>
            <li>
              <Link to="/" class="link">Pokemon!</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/:id" element={<Details/>} />
        </Routes>
      </div>
    </Router>
  );
          
}
