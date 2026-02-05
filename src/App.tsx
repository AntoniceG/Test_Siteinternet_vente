import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Emerald } from "./screens/Emerald/Emerald";
import { Home } from "./screens/Home/Home";
import { OptiPro } from "./screens/OptiPro/OptiPro";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emerald" element={<Emerald />} />
        <Route path="/optipro" element={<OptiPro />} />
      </Routes>
    </BrowserRouter>
  );
};
