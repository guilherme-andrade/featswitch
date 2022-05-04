import { FC } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import { LoginPage } from "../Pages/LoginPage/LoginPage";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};
