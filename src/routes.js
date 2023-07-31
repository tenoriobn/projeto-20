import './styles/globalStyles.scss';
import SelectPlan from 'Pages/SelectPlan';
import PersonalInfo from './Pages/PersonalInfo';
import PickAddOns from 'Pages/PickAddOns';
import FinishingUp from 'Pages/FinishingUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Steps from 'Components/Steps';
import DefaultPage from 'Components/DefaultPage';
import Button from 'Components/Button';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Steps />
      
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<PersonalInfo />} />
          <Route path="selectplan" element={<SelectPlan />} />
          <Route path="pickaddons" element={<PickAddOns />} />
          <Route path="finishingup" element={<FinishingUp />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Button nextstep="nextstep">Next Step</Button>
    </BrowserRouter>
  );
}
