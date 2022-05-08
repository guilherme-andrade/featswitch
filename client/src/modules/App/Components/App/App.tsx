import { FC } from "react";
import { ThemeProvider } from "@UI/Contexts/ThemeProvider/ThemeProvider";
import { DataLayerProvider } from "@Core/Contexts/DataLayerProvider/DataLayerProvider";
import { RouterProvider } from "@Core/Contexts/RouterProvider/RouterProvider";
import { I18nProvider } from "@I18n/Contexts/I18nProvider/I18nProvider";

// config
import { apiSchema } from "../../config/apiSchema";
import { baseTheme } from "../../config/theme";

// Routers
import { Route } from "@Core/Components/Route/Route";
import { Router as AuthRouter } from "@modules/Auth/Components/Router/Router";

export const App: FC = () => (
  <ThemeProvider theme={baseTheme}>
    <I18nProvider>
      <DataLayerProvider schema={apiSchema} url={process.env.API_URL}>
        <RouterProvider>
          <Route path="*" element={<AuthRouter />} />;
        </RouterProvider>
      </DataLayerProvider>
    </I18nProvider>
  </ThemeProvider>
);
