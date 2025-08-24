import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing } />
        <Route path="/dashboard/:id" Component={Dashboard } />
        
        
      </Routes>
    </Router>
  );
}

export default App;
