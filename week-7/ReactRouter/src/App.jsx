import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
// import {LandingPage} from '../pages/LandingPage';
// import { DashboardPage } from '../pages/DashboardPage';
import React, { Suspense } from 'react'

const LandingPage = React.lazy(() => import('../pages/LandingPage'))
const DashboardPage = React.lazy(() => import('../pages/DashboardPage'))

function App() {

  return (
    <>
      <BrowserRouter>
      <TopBar />
        <Routes>
          <Route path='/' element={<Suspense fallback={"Loading"}><LandingPage /></Suspense>} />
          <Route path='/dashboard' element={<Suspense fallback={"Loading"}><DashboardPage /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function TopBar(){
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
    </>
  )
}

export default App
