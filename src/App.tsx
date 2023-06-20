import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// website -> tailwind
// webapp -> ant design
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./appContext";
import { AppLayout } from "./components/AppLayout";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <AppContext.Provider value={{ color, setColor }}>
            <AppLayout />
          </AppContext.Provider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
