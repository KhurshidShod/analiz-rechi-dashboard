import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Layout from "./layout";

import DashboardPage from "./pages/Dashboard";
import FunnelsPage from "./pages/Funnels";
import IntegrationPage from "./pages/Integration";
import CompanyPage from "./pages/Company";
import SettingsPage from "./pages/Settings";
import TariffPage from "./pages/Tariff";
import LossesPage from "./pages/Losses";
import ProfitsPage from "./pages/Profits";
import NeedsPage from "./pages/Needs";
import ObjectionsPage from "./pages/Objections";
import SalesPage from "./pages/Sales";

import { Flip, ToastContainer } from "react-toastify";
import ManagerIndividual from "./pages/ManagerIndividual";
import EffectivityBySectionsPage from "./pages/EffectivityBySections";
import RatingAllManagersPage from "./pages/RatingAllManagers";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout noPadding={true} />}>
            <Route path="возражения" element={<ObjectionsPage />} />
            <Route path="потребности" element={<NeedsPage />} />
            <Route path="плюсы" element={<ProfitsPage />} />
            <Route path="минусы" element={<LossesPage />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="дашборд?tab=1" replace />} />
            <Route path="дашборд" action element={<DashboardPage />} />
            <Route path="компания" element={<CompanyPage />} />
            <Route path="воронки" element={<FunnelsPage />} />
            <Route path="настройка" element={<SettingsPage />} />
            <Route path="тариф" element={<TariffPage />} />
            <Route path="интеграции" element={<IntegrationPage />} />
            <Route path="продажи" element={<SalesPage />} />
            <Route
              path="эффективность"
              element={<EffectivityBySectionsPage />}
            />
            <Route
              path="оценки-менеджеров"
              element={<RatingAllManagersPage />}
            />
            <Route path="менежер/:name" element={<ManagerIndividual />} />
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
