

import {Routes ,Route}  from "react-router";
import Screen from "./Layout/layout";
import Home from "./pages/home-view";
import LoginPage from "./auth/login-view";
import SignupPage from "./auth/signup.view";
function App() {
  return (
  <Routes>
    <Route path="/" element={<Screen />} />
    <Route index element={<Home />} />
    <Route  path="/login"  element={<LoginPage />}/>
    <Route  path="/signup"  element={<SignupPage />}/>
  </Routes>
  )
}

export default App
