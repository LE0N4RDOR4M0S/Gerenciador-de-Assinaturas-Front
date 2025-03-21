import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/page";
import Dashboard from "./app/(dashboard)/layout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard children={undefined} />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
