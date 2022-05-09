import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../Layouts/DashboardLayout/DashboardLayout";

// Pages
import { DashboardHomePage } from "../Pages/DashboardHomePage/DashboardHomePage";
import { Router as SwitchesRouter } from "@modules/Switches/Components/Router/Router";

import routes from "../../config/routes";
import switchesRoutes from "@modules/Switches/config/routes";

export const Router: FC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path={routes.home} element={<DashboardHomePage />} />
        <Route path={switchesRoutes.router} element={<SwitchesRouter />} />
      </Routes>
    </DashboardLayout>
  );
};
