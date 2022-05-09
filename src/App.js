import {Route,Routes} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import About from './components/About';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import SearchView from './components/SearchView';





function App() {

  const [searchResults,setSearchResults]=useState([]);
  const [searchText,setSearchText]=useState('');

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='search' element={<SearchView
          keyword={searchText}
          searchResults={searchResults} />} />
      </Routes>

    </div>

  );
}

export default App;
