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