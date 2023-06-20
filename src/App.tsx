import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import HomePage from "./HomePage";
import enTranslation from "./en.json";
import thTranslation from "./th.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import formReducer from "./action";

import "./HomePage.css";
import LayoutPage from "./Layout";
import Frompage from "./Frompage";
import {store} from "./store";
import { Counter } from "./Teststore";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    th: { translation: thTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Layout" element={<LayoutPage />} />
          <Route path="/From" element={<Frompage />} />
          <Route path="/Teststore" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
