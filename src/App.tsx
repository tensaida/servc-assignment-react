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
              <Link to="/" className="link">Pokemon!</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Details/>} />
        </Routes>
      </div>
    </Router>
  );
          
}
