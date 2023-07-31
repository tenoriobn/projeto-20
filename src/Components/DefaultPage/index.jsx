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


/*
    Button {
        Organizar lógica de estilização do botão
        Colocar o container no rodapé sem sobrepor nenhum container
        Criar o botão `Go back` e estilizar, deixando na esquerda.***
    }

    * Criar componente de `AGRADECIMENTO`
        - Estilizar o componente.

    * Refatorar cada componente e estilização
        - Espaçamentos
        - Cores
        - Tamanhos
        - Nomeclatura
    
    * Aplicar pseudo-classes `hover, active e etc...`

    * Corrigir background do `Finishing up`
    
    * Iniciar lógica de interação.
        - Observar a funcionalidades necessárias

*/