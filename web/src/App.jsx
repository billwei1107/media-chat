import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppTheme } from './theme/AppTheme';
import AppLayout from './layouts/AppLayout';
import StyleGuide from './pages/StyleGuide';
import Home from './pages/Home';
import Discovery from './pages/Discovery';
import Live from './pages/Live';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

// Auth Guard Components
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('user');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('user');
  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

function App() {
  return (
    <AppTheme>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Routes */}
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

          <Route path="/" element={<AppLayout />}>
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

            {/* Protected Routes */}
            <Route path="discovery" element={<ProtectedRoute><Discovery /></ProtectedRoute>} />
            <Route path="live" element={<ProtectedRoute><Live /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="style-guide" element={<StyleGuide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
