import Heading from 'Components/Heading';
import CardPlan from 'Components/CardPlan';
import PlanPeriod from 'Components/PlanPeriod';

export default function SelectPlan() {
    return (
        <section>
            <Heading 
                title="Select your plan"
                paragraph="You have the option of monthly or yearly billing."
            />

            <CardPlan />

            <PlanPeriod />
        </section>
    )
}


/*
Fazer teste de mesa e definir o algoritmo a ser seguido para
1- Ao alternar de `mensal` para `anual` o `planValue` seja atualizado automaticamente.
2- O `planValue` deve atualizar caso seja selecionado outro card, armazenando tanto se for anual quanto mensal.
*/