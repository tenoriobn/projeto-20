import React from 'react';
import styles from './AppLayout.module.scss';


import PersonalInfo from 'Pages/1-PersonalInfo';
import SelectPlan from 'Pages/2-SelectPlan';
import PickAddOns from 'Pages/3-PickAddOns';
import FinishingUp from 'Pages/4-FinishingUp';

import Steps from 'Components/Steps';
import DefaultPage from 'Components/DefaultPage';
import Button from 'Components/Button';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default function AppLayout() {
    return (
        <div className={styles.applayout}>
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
        </div>
    )
}
