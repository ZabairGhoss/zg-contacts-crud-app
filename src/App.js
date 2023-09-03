import { ToastContainer } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
          <Route exact path="/" Component={()=> <Home />}/>
          <Route path="/add" element={<div>This is Add Contact</div>} />
          <Route path="/update/:id" element={<div>This is Update Contact</div>} />
          </Routes>
      </div>
  );
};

export default App;
