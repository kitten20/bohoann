import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import OnlineTest from "../../pages/OnlineTest";
import About from "../../pages/About";
import AnswerQuestion from "../../pages/AnswerQuestion";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/online-test" element={<OnlineTest />} />
      <Route path="/about" element={<About />} />
      <Route path="/answer-question" element={<AnswerQuestion />} />
    </Routes>
  );
}

export default Router;
