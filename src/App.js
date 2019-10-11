import React from 'react';
//import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Blog from './components/homepage/Blog.js';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="">
		  	<Navbar />
			  <Blog />
    </div>
  );
}

export default App;
