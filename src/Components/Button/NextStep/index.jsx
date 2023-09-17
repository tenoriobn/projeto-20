import { useNavigation } from 'common/context/NavigationContext';
import React from 'react';
import { Link } from 'react-router-dom';
import { usePlanContext } from 'common/context/PlanContext'; // Importe o contexto usePlanContext

export default function NextStep({ styles, nextstep }) {
    const { currentPageIndex, pages, goToStep } = useNavigation();
    const { activePlan } = usePlanContext();

    const nextPageIndex = currentPageIndex + 1;
    const nextPath = pages[nextPageIndex];

    const canProceed = activePlan !== null;

    return (
        <Link
            to={nextPath || '/thankyou'}
            className={`${styles.button} ${nextPath ? styles[nextstep] : styles.confirm}`}
            onClick={(e) => {
                if (!canProceed) {
                    e.preventDefault();
                } else if (nextPath) {
                    goToStep(nextPageIndex);
                }
            }}
        >
            {nextPath ? "Next Step" : "Confirm"}
        </Link>
    );
}
