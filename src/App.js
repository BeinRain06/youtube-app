/* import logo from "./logo.svg"; */
import "./App.css";
import Navbar from "./header/Navbar";
import MainArea from "./main_components/MainArea";

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Navbar />
        <MainArea />
      </div>
    </div>
  );
}

export default App;
