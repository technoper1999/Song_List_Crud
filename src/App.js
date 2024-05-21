import './App.css';
import SongListing from './components/SongListing';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import SongEdit from './components/SongEdit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{background: 'lightblue' }}>
      <h1 style={{ fontFamily: 'Pacifico',color:'blue',paddingTop:'10px' }}>Song list management</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SongListing />}></Route>
          <Route path='/song/create' element={<SongCreate />}></Route>
          <Route path='/song/detail/:id' element={<SongDetail />}></Route>
          <Route path='/song/edit/:id' element={<SongEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
