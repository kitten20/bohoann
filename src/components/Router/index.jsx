import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import OnlineTest from "../../pages/OnlineTest";
import About from "../../pages/About";
import AnswerQuestion from "../../pages/AnswerQuestion";
import Categories from "../../pages/Categories";
import Contacts from "../../pages/Contacts";
import Basket from "../../pages/Basket";
import Documentation from "../../pages/Documentation";
import Purchase from "../../pages/Purchase";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/online-test" element={<OnlineTest />} />
      <Route path="/about" element={<About />} />
      <Route path="/answer-question" element={<AnswerQuestion />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/hire-purchase" element={<Purchase />} />
    </Routes>
  );
}

export default Router;
