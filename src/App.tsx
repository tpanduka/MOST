/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import { AuthProvider } from "./contexts/AuthContext";
import { RootLayout } from "./components/layout/RootLayout";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Divisions } from "./pages/Divisions";
import { Institutions } from "./pages/Institutions";
import { Programmes } from "./pages/Programmes";
import { News } from "./pages/News";
import { Downloads } from "./pages/Downloads";
import { Contact } from "./pages/Contact";
import { Procurement } from "./pages/Procurement";
import { Login } from "./pages/Login";
import { AdminLayout } from "./components/layout/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";

export default function App() {
  return (
    <AuthProvider>
      <AccessibilityProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="divisions" element={<Divisions />} />
                <Route path="institutions" element={<Institutions />} />
                <Route path="programmes" element={<Programmes />} />
                <Route path="news" element={<News />} />
                <Route path="downloads" element={<Downloads />} />
                <Route path="contact" element={<Contact />} />
                <Route path="procurement" element={<Procurement />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={
                  <div className="py-20 text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Under Construction</h1>
                    <p className="text-slate-500">This module is currently being configured.</p>
                  </div>
                } />
              </Route>
              <Route path="/admin" element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  {/* Admin routes will go here */}
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </AccessibilityProvider>
    </AuthProvider>
  );
}


