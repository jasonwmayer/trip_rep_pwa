import React, {useState} from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.scss";
import NavBar from "./components/Nav";
import AuthRoute from "./actions/AuthRoute";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import StartNewTrip from "./pages/StartNewTrip";
import Backdrop from "./components/SlideDrawer/Backdrop.js";
import SideNav from "./components/SideNav";
import Sidebar from "react-sidebar";
import GARFOVtr from "./pages/GarfoVtrPage";
import JsonTrip from "./pages/JsonTrip/JsonTrip";
import GARFOIvr from "./pages/GarfoIvrPage";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(true);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />;
  }

  return (
    <Router>
      <Sidebar
        sidebar={<SideNav backdrop={backdropClickHandler} />}
        open={drawerOpen}
        styles={{ sidebar: { background: "white" } }}
        children={" "}
      ></Sidebar>
      <NavBar show={drawerOpen} toggle={drawerToggleClickHandler} />
      {backdrop}
      <div className="container">
        <Switch>
          <AuthRoute
            path={`${process.env.PUBLIC_URL}/home`}
            render={HomePage}
            type="private"
          />
          <AuthRoute path={`${process.env.PUBLIC_URL}/login`} type="guest">
            <LoginPage />
          </AuthRoute>
          <AuthRoute
            path={`${process.env.PUBLIC_URL}/start-new-trip`}
            type="private"
          >
            <StartNewTrip />
          </AuthRoute>
          <AuthRoute path={`${process.env.PUBLIC_URL}/vtr`} type="private">
            <GARFOVtr />
          </AuthRoute>
          <AuthRoute
            path={`${process.env.PUBLIC_URL}/vtr-json-open-trip`}
            type="private"
          >
            <JsonTrip />
          </AuthRoute>
          <AuthRoute path={`${process.env.PUBLIC_URL}/ivr`} type="private">
            <GARFOIvr />
          </AuthRoute>
          <AuthRoute exact path={`${process.env.PUBLIC_URL}/`} type="private" />
        </Switch>
      </div>
    </Router>
  );
}
