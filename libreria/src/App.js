import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import Store from './store/store';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <Store>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create/' element={<Create />}/>
          <Route path='/view/:bookId' element={<View />}/> 
        </Routes>
      </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
