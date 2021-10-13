import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@mui/material";
import useToken from './config/useToken';

// components
import Layout from "./components/Layout";
import Login from "./pages/auth/Login";

// theme
import theme from "./theme/appTheme";

// app routes
import ProtectedRoute from "./service/ProtectedRoute";
import { routes } from "./config";

// constants
import { APP_TITLE } from "./utils/constants";

// interfaces
import RouteItem from "./model/RouteItem.model";

// define app context
const AppContext = React.createContext(null);

// default component
const DefaultComponent = () => <div>No Component Defined.</div>;

import "bootstrap/dist/css/bootstrap.css";

function getRoute(item: RouteItem) {
  return item.protected ?
    <ProtectedRoute
      {...item}
      exact={true}>
        <Route
          key={`${item.key}`}
          path={`${item.path}`}
          component={item.component || DefaultComponent}
          exact
        />
    </ProtectedRoute>
    :
    <Route
      key={`${item.key}`}
      path={`${item.path}`}
      component={item.component || DefaultComponent}
      exact
    />
}

function App() {
  // const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);
  const { setToken } = useToken();

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <AppContext.Provider value={null}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/login">
                <Login setToken={setToken} />
              </Route>
              <Layout>
                {/* for each route config, a react route is created */}
                {routes.map((route: RouteItem) =>
                  route.subRoutes 
                  ? ( route.subRoutes.map((item: RouteItem) => ( getRoute(item) )) ) 
                  : ( getRoute(route) )
                )}
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
