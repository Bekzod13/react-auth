import { useState, lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';


const HomePage = lazy(() => import('./pages/home'));
const LoginPage = lazy(() => import('./pages/auth/Login'));
const RegisterPage = lazy(() => import('./pages/auth/Register'));


function App() {

  const [token, setToken] = useState(window.localStorage.getItem('token'));

  return (
    <Suspense fallback={<h1>Error from React</h1>}>
      <BrowserRouter>
        <Routes>
          {
            token ? (
              <Route path='/' element={<HomePage/>}/>
              ):(
                <>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={() =><Register setToken={setToken} />}/>
              </>
            )
          }
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
