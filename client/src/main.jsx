import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-4e575epidzp0fo5r.jp.auth0.com"
    clientId="KpYb6KYZAVFQgfRF1jlJ3pnssjzBhrjD"
    authorizationParams={{
      redirect_uri:"https://salford-one.vercel.app/"
    }}
    audience="http://localhost:9000"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
