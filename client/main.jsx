import React from "react";
import { createRoot } from "react-dom/client";
window.React = React;

import { Meteor } from "meteor/meteor";
import { App } from "/imports/ui/App";

const rootElement = document.getElementById("application");

Meteor.startup(() => {
  createRoot(rootElement).render(<App tab="home" />);
});
