import { ToastContainer } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" Component={() => <Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/update/:id" element={<UpdateContact />} />
      </Routes>
    </div>
  );
};

export default App;
