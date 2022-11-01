import './App.css';
import Home from "./Home";
import SingleMovie from "./SingleMovie"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="movie/:id" element={<SingleMovie />}></Route>
    </Routes> 
    </>
  );
}

export default App;
