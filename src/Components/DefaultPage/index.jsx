import React from 'react';
import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
    return (
        <main className={styles.main}>
            <Outlet />
        </main>
    )
}
