import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import IntroductionPageA from './pages/IntroductionPage_a';
import IntroductionPageB from './pages/IntroductionPage_b';
import IntroductionPage1A from './pages/IntroductionPage1_a';
import IntroductionPage1B from './pages/IntroductionPage1_b';
import IntroductionPage1C from './pages/IntroductionPage1_c';
import IntroductionPage1D from './pages/IntroductionPage1_d';
import IntroductionPage2A from './pages/IntroductionPage2_a';
import IntroductionPage2B from './pages/IntroductionPage2_b';
import IntroductionPage3A from './pages/IntroductionPage3_a';
import IntroductionPage3B from './pages/IntroductionPage3_b';
import SearchPage from './pages/SearchPage';
import CalendarPage from './pages/CalendarPage';
import MapPage from './pages/MapPage';
import RecommendPage from './pages/RecommendPage';
import RecommendPage1 from './pages/RecommendPage1';

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
          <Route path='/introduction/0/a' element={<IntroductionPageA />} />
          <Route path='/introduction/0/b' element={<IntroductionPageB />} />
          <Route path='/introduction/1/a' element={<IntroductionPage1A />} />
          <Route path='/introduction/1/b' element={<IntroductionPage1B />} />
          <Route path='/introduction/1/c' element={<IntroductionPage1C />} />
          <Route path='/introduction/1/d' element={<IntroductionPage1D />} />
          <Route path='/introduction/2/a' element={<IntroductionPage2A />} />
          <Route path='/introduction/2/b' element={<IntroductionPage2B />} />
          <Route path='/introduction/3/a' element={<IntroductionPage3A />} />
          <Route path='/introduction/3/b' element={<IntroductionPage3B />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/recommend/calculator' element={<RecommendPage />} />
          <Route path='/recommend/strategy' element={<RecommendPage1 />} />
        </Routes>
      </div>    
    </div>
  );
}

export default App;
