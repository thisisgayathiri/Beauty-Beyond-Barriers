import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Salons from "./pages/Salons";
import WelcomeOnboard from "./pages/onboarding/WelcomeOnboard";
import SignUp from "./pages/onboarding/SignUp";
import UserPreferences from "./pages/onboarding/UserPreferences";
import Confirmation from "./pages/Confirmation";
import Appointment from "./pages/Appointment";
import ChatWindow from "./pages/chat/ChatWindow";
import Services from "./pages/services/Services";


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Poppins',
        },
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeOnboard />} />
            <Route path="/sign-up" element={ <SignUp />} />
            <Route path='/user-preferences' element={ <UserPreferences />}/>
            <Route path="/services" element={<Services />} />
            <Route path="/salons" element={<Salons />} />
            <Route path='/chat' element={<ChatWindow/>}/>
            <Route path='/confirmation' element={<Confirmation />}/>
            <Route path='/appointment' element={<Appointment />}/>
          </Routes>
        </BrowserRouter>
        ,
      </div>
    </ConfigProvider>
  );
}

export default App;
