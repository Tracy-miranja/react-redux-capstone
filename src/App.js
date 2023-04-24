import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Links from "./components/Links";


function App() {
  return (
    <>
    <Links />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/Details" element = {<Details />} />
    </Routes>
  </>
  );
}

export default App;
