import React from 'react';
import styles from './Button.module.scss';
import GoBack from 'Components/Button/GoBack';
import NextStep from './NextStep';
import { useNavigation } from 'common/context/NavigationContext';

export default function Button( {nextstep} ) {
    const { currentPageIndex } = useNavigation();

    return (
        <footer className={styles.footer} >
            <div className={styles.button__container}>
                {currentPageIndex === 0 ? '' : <GoBack styles={styles} />}

                <NextStep styles={styles} nextstep={nextstep} />
            </div>
        </footer>
    )
}
