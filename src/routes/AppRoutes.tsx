import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@pages/dashboard/Dashboard";
import Login from "@pages/auth/Login";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
