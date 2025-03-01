import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layout";

import DashboardPage from "./pages/Dashboard";
import FunnelsPage from "./pages/Funnels";
import IntegrationPage from "./pages/Integration";
import CompanyPage from "./pages/Company";
import SettingsPage from "./pages/Settings";
import TariffPage from "./pages/Tariff";
import CallCenterPage from "./pages/CallCenter";
import LossesPage from "./pages/Losses";
import ProfitsPage from "./pages/Profits";
import NeedsPage from "./pages/Needs";
import ObjectionsPage from "./pages/Objections";
import SalesPage from "./pages/Sales";

import { Flip, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="дашборд" element={<DashboardPage />} />
            <Route path="компания" element={<CompanyPage />} />
            <Route path="воронки" element={<FunnelsPage />} />
            <Route path="настройка" element={<SettingsPage />} />
            <Route path="тариф" element={<TariffPage />} />
            <Route path="интеграции" element={<IntegrationPage />} />
            <Route path="продажи" element={<SalesPage />} />
            <Route path="колл-центр" element={<CallCenterPage />} />
            <Route path="возражения" element={<ObjectionsPage />} />
            <Route path="потребности" element={<NeedsPage />} />
            <Route path="плюсы" element={<ProfitsPage />} />
            <Route path="минусы" element={<LossesPage />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </>
  );
};

export default App;
