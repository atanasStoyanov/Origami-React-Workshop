import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import errorImg from '../../images/errorImg.png';

const ErrorPage = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <Title title='Something went wrong...' />
                <img src={errorImg} className={styles['error-img']} alt='error' />
            </div>
        </PageLayout>
    )
}

export default ErrorPage;