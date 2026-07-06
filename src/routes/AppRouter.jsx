import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ROUTES from "@/constants/routes";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import LoginPage from "@/pages/auth/LoginPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import NewBulletinPage from "@/pages/bulletin/NewBulletinPage";
import HistoryPage from "@/pages/history/HistoryPage";
import UsersPage from "@/pages/users/UsersPage";
import SettingsPage from "@/pages/settings/SettingsPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        </Route>

        {/* Rutas privadas */}
        <Route element={<MainLayout />}>
          <Route
            path={ROUTES.DASHBOARD}
            element={<DashboardPage />}
          />

          <Route
            path={ROUTES.NEW_BULLETIN}
            element={<NewBulletinPage />}
          />

          <Route
            path={ROUTES.HISTORY}
            element={<HistoryPage />}
          />

          <Route
            path={ROUTES.USERS}
            element={<UsersPage />}
          />

          <Route
            path={ROUTES.SETTINGS}
            element={<SettingsPage />}
          />
        </Route>

        <Route
          path="*"
          element={<Navigate to={ROUTES.LOGIN} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;