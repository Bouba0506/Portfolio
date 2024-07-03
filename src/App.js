import Courses from "./Components/cours/Courses";
import HeadNav from "./Components/headers/head";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Solution from "./Components/solution/Solution";
import Pricing from "./Components/pricing/Pricing";
import Login from "./Components/log/Login";

function App() {
  return (
    <Router>
    <div className="w-full relative">
      <HeadNav/>
      <Routes>
        <Route path="/" element={<Courses/>}/>
        <Route path="/" element={<Solution/>}/>
        <Route path="/" element={<Pricing/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
