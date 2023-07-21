import SelectPlan from 'Pages/SelectPlan';
import PersonalInfo from './Pages/PersonalInfo';
import './styles/globalStyles.scss';
import PickAddOns from 'Pages/PickAddOns';
import FinishingUp from 'Pages/FinishingUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Steps from 'Components/Steps';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Steps />
      
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/pickaddons" element={<PickAddOns />} />
        <Route path="/finishingup" element={<FinishingUp />} />

        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
