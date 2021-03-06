import { FC } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import { AddSwitchPage } from "../Pages/AddSwitchPage/AddSwitchPage";
import { ManageSwitchesPage } from "../Pages/ManageSwitchesPage/ManageSwitchesPage";
import { EditSwitchPage } from "../Pages/EditSwitchPage/EditSwitchPage";

import routes from "../../config/routes";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={routes.add} element={<AddSwitchPage />} />
      <Route path={routes.manage} element={<ManageSwitchesPage />} />
      <Route path={routes.edit} element={<EditSwitchPage />} />
    </Routes>
  );
};
