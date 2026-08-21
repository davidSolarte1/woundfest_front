import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegistrationPage from './pages/RegistrationPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<LandingPage />} />
        <Route path="/registro"  element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  )
}
