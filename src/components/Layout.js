import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailChart from '../pages/DetailChart';

function Layout() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detailChart' element={<DetailChart />}></Route>
      </Routes>    
    </HashRouter>
  );
}

export default Layout;
