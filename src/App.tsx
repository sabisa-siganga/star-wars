import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import GlobalStyles from "./Global.style";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CustomizedRoutes from "./CustomizedRoutes";

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <CustomizedRoutes />
      <Footer />
    </>
  );
}

export default App;
