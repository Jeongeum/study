import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignupPage } from './pages/Signup/SignupPage';
import { SplashPage } from './pages/Splash/SplashPage';
import { LoginPage } from './pages/Login/LoginPage';
import { SignupProfileSettingPage } from './pages/Signup/SignupProfileSettingPage';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
