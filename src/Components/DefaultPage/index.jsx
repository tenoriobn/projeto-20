import React from 'react';
import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import { NavigationProvider } from 'common/context/NavigationContext';
import Steps from 'Components/Steps';
import { FormProvider } from 'common/context/FormContext';
import Button from 'Components/Button';
import { PlanProvider } from 'common/context/PlanContext';
import { AddonsProvider } from 'common/context/AddonsContext';

export default function DefaultPage() {
    return (
        <NavigationProvider>
            <FormProvider>
                <PlanProvider>
                    <AddonsProvider>
                        <Steps />
                            <main className={styles.main}>
                                <Outlet />
                            </main>
                        <Button nextstep="nextstep" />
                    </AddonsProvider>
                </PlanProvider>
            </FormProvider>
        </NavigationProvider>
    )
}