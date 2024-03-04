import NavBar from './navBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
