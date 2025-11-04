import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ReloadHandler from "@routes/components/reloadHandler";
import routesPaths from "@routes/routes";

const Router = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <ReloadHandler />
      <Routes>
        {routesPaths.map(({ path, privateRoute, routes }) =>
          routes.map(([itemPath, element]) => {
            return (
              <Route
                key={path + itemPath}
                path={path + itemPath}
                element={privateRoute && token == null ? <Navigate to="/signin" /> : element}
              />
          )})
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;