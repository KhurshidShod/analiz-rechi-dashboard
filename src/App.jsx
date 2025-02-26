import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layout";
import Dashboard from "./pages/Dashboard";
import Funnels from "./pages/Funnels";
import Integration from "./pages/Integration";
import Records from "./pages/Records";
import Reports from "./pages/Reports";
import Company from "./pages/Company";
import Settings from "./pages/Settings";
import Tariff from "./pages/Tariff";
import { Flip, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="company" element={<Company />} />
            <Route path="funnels" element={<Funnels />} />
            <Route path="records" element={<Records />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="tariff" element={<Tariff />} />
            <Route path="integration" element={<Integration />} />
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
