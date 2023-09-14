import React from 'react';
import styles from './Button.module.scss';
import GoBack from 'Components/Button/GoBack';
import NextStep from './NextStep';
import { useNavigation } from 'common/context/NavigationContext';
import { useLocation } from 'react-router-dom';

export default function Button({ nextstep }) {
    const { currentPageIndex } = useNavigation();
    const location = useLocation();

    console.log(currentPageIndex)

    if (location.pathname !== '/thankyou') {
        return (
            <footer className={styles.footer}>
                <div className={styles.button__container}>
                    {currentPageIndex === 0 ? '' : <GoBack styles={styles} />}
                    <NextStep styles={styles} nextstep={nextstep} />
                </div>
            </footer>
        );
    } else {
        return null;
    }
}
