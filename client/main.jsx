import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
window.React = React;

import { Meteor } from "meteor/meteor";
import App from "/imports/ui/App";
import Header from "/imports/ui/Header";
import Garage from "/imports/ui/modules/garage/Garage";

const rootElement = document.getElementById("application");

Meteor.startup(() => {
  const root = createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={""} element={<App />} />
        <Route path={"garage"} element={<Garage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>There's nothing here!</main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
});
