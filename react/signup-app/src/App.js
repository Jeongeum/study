import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignupPage } from './pages/Signup/SignupPage';
import { SplashPage } from './pages/Splash/SplashPage';
import { LoginPage } from './pages/Login/LoginPage';
import { SignupProfileSettingPage } from './pages/Signup/SignupProfileSettingPage';
import { HomePage } from './pages/Home/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/profilesetting"
            element={<SignupProfileSettingPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
