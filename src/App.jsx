//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Header = () => <h1>Ultimate Form</h1>;
const Step1 = () => <>Step1</>;
const Step2 = () => <>Step2</>;
const Step3 = () => <>Step3</>;



const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
