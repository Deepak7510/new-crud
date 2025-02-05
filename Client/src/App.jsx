import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Form from "./components/Form";



const App = () => {

  return (
    <>
      <Routes>
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
    </>
  );
};

export default App;
