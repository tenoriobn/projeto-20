import React from 'react';
import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import { NavigationProvider } from 'common/context/NavigationContext';
import Steps from 'Components/Steps';
import { FormProvider } from 'common/context/PersonalContext';
import Button from 'Components/Button';
import { PlanProvider } from 'common/context/PlanContext';
import { AddonsProvider } from 'common/context/AddonsContext';

export default function DefaultPage() {
    return (
        <NavigationProvider>
            <Steps />

            <FormProvider>
                <PlanProvider>
                    <AddonsProvider>
                        <main className={styles.main}>
                            <Outlet />
                        </main>
                    </AddonsProvider>
                </PlanProvider>
            </FormProvider>

            <Button nextstep="nextstep" />
        </NavigationProvider>
    )
}


/*
    Button {
        Organizar lógica de estilização do botão ****
        Colocar o container no rodapé sem sobrepor nenhum container****
        Criar o botão `Go back` e estilizar, deixando na esquerda.***
    }

    * Refatorar cada componente e estilização******
        - Espaçamentos***
        - Cores***
        - Tamanhos***
        - Nomeclatura***
    
    * Aplicar pseudo-classes `hover, active e etc...`***

    * Corrigir background do `Finishing up` ***

    * Criar componente de `AGRADECIMENTO`
        - Estilizar o componente.
    
    * Iniciar lógica de interação.
        - Observar a funcionalidades necessárias

*/