import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default Router;
