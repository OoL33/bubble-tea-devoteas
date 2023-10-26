/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from "react";
import { createRoot } from "react-dom/client";

import App from "../react/components/App";
import RedBox from "redbox-react";

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

document.addEventListener("turbolinks:load", () => {
  initializeApp();
});

const initializeApp = () => {
  const container = document.getElementById("app");
  const root = createRoot(container);

  if (root) {
    if (window.railsEnv && window.railsEnv === "development") {
      try {
        root.render(<App />);
      } catch (e) {
        root.render(<RedBox error={e} />);
      }
    } else {
      root.render(<App />);
    }
  }
};
