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

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/stepone" element={<StepOne />} />
        <Route path="/steptwo" element={<StepTwo />} />
        <Route path="/stepthree" element={<StepThree />} />
        <Route path="/stepfour" element={<StepFour />} />
        <Route path="/stepfive" element={<StepFive />} />
        <Route path="/stepsix" element={<StepSix />} />
        <Route path="/stepseven" element={<StepSeven />} />
        <Route path="/anton" element={<Anton />} />
        <Route path="/tutaina" element={<Tutaina />} />
        <Route path="/nanita" element={<Nanita />} />
        <Route path="/campana" element={<Campana />} />
        <Route path="/peces" element={<Peces />} />
        <Route path="/dayone" element={<DayOne />} />
        <Route path="/daytwo" element={<DayTwo />} />
        <Route path="/daythree" element={<DayThree />} />
        <Route path="/dayfour" element={<DayFour />} />
        <Route path="/dayfive" element={<DayFive />} />
        <Route path="/daysix" element={<DaySix />} />
        <Route path="/dayseven" element={<DaySeven />} />
        <Route path="/dayeight" element={<DayEigth />} />
        <Route path="/daynine" element={<DayNine />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
