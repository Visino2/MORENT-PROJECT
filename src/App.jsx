import Skeleton from "./Pages/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import CarRentalBooking from "./Pages/CarRentalBooking";
import DashboardChart from "./Pages/DashboardChart";


function App() {
  return (
    <Router>
      {/* <Skeleton> */}
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/dashboard/:id" Component={Dashboard} />
           <Route path="/rent/:id" Component={CarRentalBooking} /> 
           <Route path="/dashboardchart" Component={DashboardChart} />
        </Routes>
      {/* </Skeleton> */}
    </Router>
  );
}

export default App;
