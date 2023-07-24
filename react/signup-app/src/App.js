import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignupPage } from './pages/Signup/SignupPage';
import { SplashPage } from './pages/Splash/SplashPage';
import { LoginPage } from './pages/Login/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
