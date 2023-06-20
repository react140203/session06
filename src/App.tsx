import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// website -> tailwind
// webapp -> ant design
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./appContext";
import { AppLayout } from "./components/AppLayout";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{ color, setColor }}>
          <AppLayout></AppLayout>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
