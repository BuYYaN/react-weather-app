import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./components/History";
import Home from "./components/Home";
import Nav from "./components/Nav";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
