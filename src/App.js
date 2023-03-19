import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomeOnboard from "./pages/onboarding/WelcomeOnboard";
import SignUp from "./pages/onboarding/SignUp";
import UserPreferences from "./pages/onboarding/UserPreferences";
import Confirmation from "./pages/Confirmation";
import Appointment from "./pages/Appointment";
import ChatWindow from "./pages/chat/ChatWindow";
import Services from "./pages/services/Services";
import SpeechRecognizer from "./components/speech/SpeechRecognizer";
import SalonsList from "./pages/services/SalonsList";
import StylistsList from "./pages/services/StylistsList";
import StylistProfile from "./pages/stylist/StylistProfile";
import Courses from "./pages/courses/Course";
import CourseDetails from "./pages/courses/CourseDetails";
import Welcome from "./pages/courses/Welcome";
import Call from "./pages/call/Call";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
        },
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeOnboard />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/user-preferences" element={<UserPreferences />} />

            <Route path="/services" element={<Services />} />
            <Route path="/salons" element={<SalonsList />} />
            <Route path="/stylists" element={<StylistsList />} />
            <Route path="/profile-stylist" element={<StylistProfile />} />
            <Route path="/call" element={<Call/>} />

            <Route path="/chat" element={<ChatWindow />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/speech" element={<SpeechRecognizer />} />
            <Route path="/courses" element ={<Courses/>} />
            <Route path="/course" element={<CourseDetails/>} />

            <Route path="/welcome-ally" element={<Welcome/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
