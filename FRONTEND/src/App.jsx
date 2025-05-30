import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <Auth0Provider
  domain="dev-s1ic1vscbrdzamua.us.auth0.com"
    clientId="Lml4qAmS7zjdR7s86EIjo3jDx6qx53fq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
      >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      </Auth0Provider>
  );
};

export default App;
