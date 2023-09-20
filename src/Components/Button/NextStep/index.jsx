import { useNavigation } from 'common/context/NavigationContext';
import React from 'react';
import { Link } from 'react-router-dom';
import { usePlanContext } from 'common/context/PlanContext';
import { useFormContext } from 'common/context/FormContext';

export default function NextStep({ styles, nextstep }) {
    const { currentPageIndex, pages, goToStep } = useNavigation();
    const { activePlan } = usePlanContext();
    const { formData, setShowCustomMessage } = useFormContext();

    const nextPageIndex = currentPageIndex + 1;
    const nextPath = pages[nextPageIndex];

    const isPageValid = () => {
        if (currentPageIndex === 0 && !formData) {
            setShowCustomMessage(true);
            return false;
        }

        if (currentPageIndex === 0 && !("Name" in formData && "EmailAddress" in formData && "PhoneNumber" in formData)) {
            setShowCustomMessage(true);
            return false;
        }

        if (currentPageIndex === 2 && !activePlan) {
            return false;
        }

        setShowCustomMessage(false);
        return true;
    };

    const handleLinkClick = (e) => {
        if (!isPageValid()) {
            e.preventDefault();
        } else if (nextPath) {
            goToStep(nextPageIndex);
        }
    };

    const buttonText = nextPath ? "Next Step" : "Confirm";

    return (
        <Link
            to={nextPath || '/thankyou'}
            className={`${styles.button} ${nextPath ? styles[nextstep] : styles.confirm}`}
            onClick={handleLinkClick}
        >
            {buttonText}
        </Link>
    );
}
