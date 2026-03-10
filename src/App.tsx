/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/src/context/AppContext';
import LandingPage from '@/src/pages/LandingPage';
import AuthPage from '@/src/pages/AuthPage';
import CoursePurchasePage from '@/src/pages/CoursePurchasePage';
import CheckoutPage from '@/src/pages/CheckoutPage';
import DashboardPage from '@/src/pages/DashboardPage';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/purchase" element={<CoursePurchasePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
