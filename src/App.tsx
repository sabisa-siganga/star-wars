import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import GlobalStyles from "./Global.style";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CustomizedRoutes from "./CustomizedRoutes";
import { GlobalProvider } from "./GlobalState/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <GlobalStyles />

      <Header />
      <CustomizedRoutes />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
