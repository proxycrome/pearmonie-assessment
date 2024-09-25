import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/dashboard";
const LazyLogin = React.lazy(() => import('./pages/login'));
const LazyUsers = React.lazy(() => import('./pages/users'));
const LazyHelpPage = React.lazy(() => import('./pages/help'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<LazyUsers />} />
            <Route path="help" element={<LazyHelpPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
