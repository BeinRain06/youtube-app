/* import logo from "./logo.svg"; */
import "./App.css";
import Navbar from "./header/Navbar-Copy";
import MainArea from "./main_components/MainArea-Copy";
import NewArea from "./main_components/NewArea-Copy";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

/* function App() {
  return (
    <div className="App">
      <Router>
        <div className="App_container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <MainArea />
                </>
              }
            />
            <Route path="/videos" element={<NewArea />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
} */

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App_container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <MainArea />
                </>
              }
            />
            <Route path="/videos" element={<NewArea />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

/* function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Navbar />
        <MainArea />
      </div>
    </div>
  );
} */

export default App;
