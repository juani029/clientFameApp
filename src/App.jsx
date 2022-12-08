import { Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Home from './components/Home';
import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import Protected from './components/layout/Protected';
import { AuthProvider } from './context/AauthProvider';
import ForgetPassword from './components/ForgetPassword';
import ConfirmAccount from './pages/ConfirmAccount';
import BeforeStart from './components/BeforeStart';
import Targets from './components/Targets';
import PaidPackage from './pages/PaidPackage';
import Perfil from './components/Perfil';
import Start from './components/Start';
import EmotionResume from './components/EmotionResume';
import TerapistPanel from './pages/TerapistPanel';
import Payment from './components/Payment';
import Chatbot from './components/chatBot/ChatBot';
import About from './components/targets/About';
function App() {
  return (
    <AuthProvider>
      <div className="bg-primary min-h-screen w-full flex font-roboto">
        {/* Rutas Publicas */}
        <Routes>
          <Route path="/register" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ForgetPassword />} />
          <Route path="/reset:token" element={<NewPassword />} />
          <Route path="/confirm/:token" element={<ConfirmAccount />} />
          <Route path="/" element={<Start />} />
          {/* Rutas Privadas */}
          <Route path="/" element={<Protected />}>
            <Route path="/targets" element={<Targets />} />
            <Route path="/beforeStart" element={<BeforeStart />} />
            <Route path="/home" element={<Home />} />
            <Route path="/paid" element={<PaidPackage />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/emotionResume" element={<EmotionResume />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/chat" element={<Chatbot />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
