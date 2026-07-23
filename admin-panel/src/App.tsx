import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AddProjectPage } from './pages/AddProjectPage';
import { BlogsPage } from './pages/BlogsPage';
import { AddBlogPage } from './pages/AddBlogPage';
import { SettingsPage } from './pages/SettingsPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/add" element={<AddProjectPage />} />
          <Route path="projects/edit/:id" element={<AddProjectPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/add" element={<AddBlogPage />} />
          <Route path="blogs/edit/:id" element={<AddBlogPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;