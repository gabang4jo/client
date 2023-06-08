import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import IntroductionPage from './pages/IntroductionPage';
import SearchPage from './pages/SearchPage';
import CalendarPage from './pages/CalendarPage';
import MapPage from './pages/MapPage';
import RecommendPage from './pages/RecommendPage';

function App() {
  const [loginId, setLoginId] = useState('')
  const [loginState, setLoginState] = useState('')
  const [loginName, setLoginName] = useState('')
  const [loginProfile, setLoginProfile] = useState('')
  const [loginAddr, setLoginAddr] = useState('')

  const loginUserProps = {
    loginId,
    loginState,
    loginName,
    loginProfile,
    loginAddr
  }

  const hookProps = {
    setLoginId,
    setLoginState,
    setLoginName,
    setLoginProfile,
    setLoginAddr
  }

  return (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/' element={<MainPage {...loginUserProps} />}/>
          <Route path='/login' element={<LoginPage {...hookProps} />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/introduction' element={<IntroductionPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/recommend' element={<RecommendPage />} />
        </Routes>
      </div>    
    </div>
  );
}

export default App;
