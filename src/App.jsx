import Skeleton from "./Pages/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <Router>
      {/* <Skeleton> */}
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/dashboard/:id" Component={Dashboard} />
        </Routes>
      {/* </Skeleton> */}
    </Router>
  );
}

export default App;
