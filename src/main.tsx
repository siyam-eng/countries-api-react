import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Layout from "./Layout.tsx";
import CountryDetail from "./CountryDetail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/countries-api-react">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path=":countryCode" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
