import React, { useState } from "react";
import { RecoilRoot } from 'recoil';
import YTLinks from "./Integrations/AirtableRequest";
import Header from "./Components/Header";
import RememberMe from "./Components/RememberMe";
import SideNavigationPanel from "./Components/SideNavigationPanel";
import Column from "./Components/ColumnDataContainer";
import {FormUpload} from './Components/FormUpload/formUpload';
import {Routes, Route } from "react-router-dom";

export default () => {
  return (
    <RecoilRoot> 
      <Header />
      <Routes>
        <Route path="/" element={<YTLinks/>} />
        <Route path="/ocr" element={<FormUpload/>} />
      </Routes>
      <SideNavigationPanel className="navBar show" />
      <RememberMe />
    </RecoilRoot>
  );
}
