import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// website -> tailwind
// webapp -> ant design
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./appContext";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BaseLayout } from "./components/BaseLayout";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <AppContext.Provider value={{ color, setColor }}>
              <BaseLayout />
            </AppContext.Provider>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </>
  );
}

export default App;
