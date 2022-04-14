import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Registration from './components/Reg/Registration';
import Profile from './components/Profile/Profile';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<>
            <Link to='signup'>Зарегистрироваться</Link> <br />
            <Link to='signin'>Войти</Link>
          </>}
        />
        <Route path='signup' element={<Registration />}/>
        <Route path='signin' element={<Auth />}/>
        <Route path='profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
