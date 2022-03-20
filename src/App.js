import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_LOADED } from "./redux/actionTypes";
import Weather from "./agent";
import History from "./components/History";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = ({ onAppLoaded }) => {
  useEffect(() => {
    onAppLoaded();
  }, [onAppLoaded]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAppLoaded: () =>
    dispatch({
      type: APP_LOADED,
      payload: Weather.history(),
    }),
});

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);
