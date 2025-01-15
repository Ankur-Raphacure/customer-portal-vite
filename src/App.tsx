import React, { Suspense } from "react";
import MainRoutes from "./router/MainRoutes";

import Layout from "./components/Layout";
import { Switch, BrowserRouter, useLocation } from "react-router-dom";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";
import { ViewportProvider } from "./context/ViewportContext";
import "./App.css";
import "./responsive.css";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <ViewportProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Main />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ViewportProvider>
  );
};

const Main: React.FC = () => {
  const location = useLocation();
  // const isHome = false;
  const isHome = location.pathname === "/";

  return (
    <Suspense fallback={null}>
      <Layout hideHeader={isHome} hideFooter={isHome}>
        <MainRoutes />
      </Layout>
    </Suspense>
  );
};

export default App;
