import { Navigate, Route, Routes } from "react-router-dom";
import {
  DayEigth,
  DayFive,
  DayFour,
  DayOne,
  DaySeven,
  DaySix,
  DayThree,
  DayTwo,
} from "../pages/Days";
import Home from "../pages/Home";
import { Anton, Campana, Nanita, Peces, Tutaina } from "../pages/Sings";
import {
  StepFive,
  StepFour,
  StepOne,
  StepSeven,
  StepSix,
  StepThree,
  StepTwo,
} from "../pages/Steps";
import Layout from "./Layout";
import DayNine from "../pages/Days/DayNine";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="/" element={<Home />} />
        <Route path="/novena/index.html" element={<Home />} />
        <Route path="/novena/novena" element={<Home />} />
        <Route path="/novena/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route
          path="/novena/oracion-para-todos-los-dias"
          element={<StepOne />}
        />
        <Route path="/novena/lectura-para-hoy" element={<StepTwo />} />
        <Route
          path="/novena/oracion-a-la-santisima-virgen"
          element={<StepThree />}
        />
        <Route path="/novena/oracion-a-san-jose" element={<StepFour />} />
        <Route path="/novena/los-gozos" element={<StepFive />} />
        <Route path="/novena/oracion-al-nino-jesus" element={<StepSix />} />
        <Route path="/novena/villancicos" element={<StepSeven />} />
        <Route path="/novena/villancicos/anton" element={<Anton />} />
        <Route path="/novena/villancicos/tutaina" element={<Tutaina />} />
        <Route path="/novena/villancicos/nanita" element={<Nanita />} />
        <Route path="/novena/villancicos/campana" element={<Campana />} />
        <Route path="/novena/villancicos/peces" element={<Peces />} />
        <Route path="/novena/lectura-para-hoy/16" element={<DayOne />} />
        <Route path="/novena/lectura-para-hoy/17" element={<DayTwo />} />
        <Route path="/novena/lectura-para-hoy/18" element={<DayThree />} />
        <Route path="/novena/lectura-para-hoy/19" element={<DayFour />} />
        <Route path="/novena/lectura-para-hoy/20" element={<DayFive />} />
        <Route path="/novena/lectura-para-hoy/21" element={<DaySix />} />
        <Route path="/novena/lectura-para-hoy/22" element={<DaySeven />} />
        <Route path="/novena/lectura-para-hoy/23" element={<DayEigth />} />
        <Route path="/novena/lectura-para-hoy/24" element={<DayNine />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
