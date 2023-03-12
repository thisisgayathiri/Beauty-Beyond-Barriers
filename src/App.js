import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Salons from "./pages/Salons";
import WelcomeOnboard from "./pages/onboarding/WelcomeOnboard";
import SignUp from "./pages/onboarding/SignUp";
import UserPreferences from "./pages/onboarding/UserPreferences";


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
            <Route path="/services" element={<Services />} />
            <Route path="/salons" element={<Salons />} />
            <Route path="/sign-up" element={ <SignUp />} />
            <Route path='/user-preferences' element={ <UserPreferences />}/>
          </Routes>
        </BrowserRouter>
        ,
      </div>
    </ConfigProvider>
  );
}

export default App;
