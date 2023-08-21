import React from 'react';
import styles from './routes.module.scss';

import DefaultPage from 'Components/DefaultPage';
import PersonalInfo from 'Pages/1-PersonalInfo';
import SelectPlan from 'Pages/2-SelectPlan';
import PickAddOns from 'Pages/3-PickAddOns';
import FinishingUp from 'Pages/4-FinishingUp';

import { BrowserRouter, Route, Routes } from 'react-router-dom';;

export default function AppRoutes() {

    return (
        <div className={styles.approutes}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultPage />}>
                        <Route index element={<PersonalInfo />} />
                        <Route path="selectplan" element={<SelectPlan />} />
                        <Route path="pickaddons" element={<PickAddOns />} />
                        <Route path="finishingup" element={<FinishingUp />} />
                    </Route>

                    <Route path="*" element={<div>Página não encontrada</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}