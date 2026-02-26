import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import SetLocation from "./components/pickup/SetLocation";
import ScheduleTime from "./components/pickup/ScheduleTime";
import CollectorAssigned from "./components/pickup/CollectorAssigned";
import VerifyPickup from "./components/pickup/VerifyPickup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default page → go to signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pickup/location" element={<SetLocation />} />
        <Route path="/pickup/schedule" element={<ScheduleTime />} />
        <Route path="/pickup/collector-assigned" element={<CollectorAssigned />} />
        <Route path="/pickup/verify" element={<VerifyPickup />} />

        {/* Placeholder dashboard routes so navigation doesn't crash */}
        <Route
          path="/dashboard"
          element={<PlaceholderPage title="Citizen Dashboard" />}
        />
        <Route
          path="/collector/dashboard"
          element={<PlaceholderPage title="Collector Dashboard" />}
        />
        <Route
          path="/admin/dashboard"
          element={<PlaceholderPage title="Admin Dashboard" />}
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Temporary placeholder so navigation works before dashboards are built
function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-green-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 text-center shadow-xl">
        <div className="text-4xl mb-4">♻️</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-500 text-sm">This page is coming soon.</p>
      </div>
    </div>
  );
}

export default App;
