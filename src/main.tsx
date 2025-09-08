import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter } from "react-router";
import { Toaster } from "./components/ui/sonner.tsx";
import { ContextProvider } from "./context/user-content.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
      <Toaster />
    </ContextProvider>
  </BrowserRouter>
);
