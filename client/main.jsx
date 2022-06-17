import { Meteor } from "meteor/meteor";
import { createRoot } from "react-dom/client";
import { App } from "/imports/ui/App";
import React from "react";

const container = document.getElementById("application");
const root = createRoot(container);

Meteor.startup(() => {
  root.render(<App tab="home" />);
});
