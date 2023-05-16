import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pagejs/Home";
import Services from "./Pagejs/Services";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/Services" element={<Services />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
