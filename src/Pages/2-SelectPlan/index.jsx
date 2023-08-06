import React, { useState } from 'react';
import Heading from 'Components/Heading';
import CardPlan from 'Components/CardPlan';
import PlanPeriod from 'Components/PlanPeriod';

export default function SelectPlan() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section>
            <Heading 
                title="Select your plan"
                paragraph="You have the option of monthly or yearly billing."
            />

            <CardPlan isYearly={isYearly} />

            <PlanPeriod isYearly={isYearly} setIsYearly={setIsYearly} />
        </section>
    )
}


/*
Aqui o que tenho que fazer para tornar esse card dinâmico
    - Nessa folha vou chamar apenas <CardPlan />
    - O componente CardPlan vai mapear o arquivo .json e cria o card que irá gerar vários outros.
    - Talvez o article e todo o conteúdo já existe vai dentro do mapeamente, com as respectivas propriedades.
*/