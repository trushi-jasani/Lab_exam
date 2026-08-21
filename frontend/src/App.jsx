import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";

function App() {
  return (
      <BrowserRouter>

        <Routes>

          <Route
              path="/"
              element={<Login />}
          />

          <Route
              path="/login"
              element={<Login />}
          />

          <Route
              path="/student/dashboard"
              element={<StudentDashboard />}
          />

          <Route
              path="/professor/dashboard"
              element={<ProfessorDashboard />}
          />

        </Routes>

      </BrowserRouter>
  );
}

export default App;