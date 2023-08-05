import React from 'react';
import styles from './SelectPlan.module.scss';
import Heading from 'Components/Heading';
import CardPlan from 'Components/CardPlan';
import PlanPeriod from 'Components/PlanPeriod';

export default function SelectPlan() {
    return (
        <section className="">
            <Heading 
                title="Select your plan"
                paragraph="You have the option of monthly or yearly billing."
            />

            <CardPlan/>

            <PlanPeriod />
            
        </section>
    )
}


/*
Aqui o que tenho que fazer para tornar esse card dinâmico
    - Nessa folha vou chamar apenas <CardPlan />
    - O componente CardPlan vai mapear o arquivo .json e cria o card que irá gerar vários outros.
    - Talvez o article e todo o conteúdo já existe vai dentro do mapeamente, com as respectivas propriedades.
*/