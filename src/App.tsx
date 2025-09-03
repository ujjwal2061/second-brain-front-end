import { Routes, Route } from "react-router";
import Screen from "./Layout/layout";
import Home from "./pages/home-view";
import LoginPage from "./auth/login-view";
import SignupPage from "./auth/signup.view";
import DashbordPage from "./pages/dashbord-view";
import AppLayout from "./Layout/dashbord-view-layout";
import YoutubePage from "./pages/dashbord-pages/youtbue-view";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Screen />} />
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/*Dashbord after login*/}
      <Route path="/dashbord" element={<AppLayout />}>
        <Route index element={<DashbordPage />} />
        <Route path="/dashbord/youtube" element={<YoutubePage />} />
      </Route>
    </Routes>
  );
}

export default App;
