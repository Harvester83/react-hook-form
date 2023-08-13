//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import Header from "./Header";
import MyForm from "./MyForm";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<MyForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
