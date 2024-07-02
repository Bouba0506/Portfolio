import Courses from "./Components/cours/Courses";
import HeadNav from "./Components/headers/head";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Solution from "./Components/solution/Solution";
import Pricing from "./Components/pricing/Pricing";
import Login from "./Components/log/Login";

function App() {
  return (
    <Router>
    <div className="py-2 px-8">
      <HeadNav/>
      <Routes>
        <Route path="/" element={<Courses/>}/>
        <Route path="/solution" element={<Solution/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="/log" element={<Login/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
