import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './components/User';
import './App.css';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element={<Users />}>
            <Route path=':id' element={<User />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
