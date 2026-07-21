import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Layout/Dashboard";
import { Overview } from "./pages/Overview";
import { Appointments } from "./pages/Appointments";
import { Patients } from "./pages/Patients";
import { Message } from "./pages/Message";
import { ProtectedRoute } from "./route/ProtectedRoute";
import { Login } from "./auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="patient" element={<Patients />} />
          <Route path="appointment" element={<Appointments />} />
          <Route path="message" element={<Message />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
