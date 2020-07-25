import React from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';
import SubTitle from '../../components/sub-title';


const ShareThoughtsPage = () => {
    return (
        <PageLayout>
            <div>
                <Title title='Share your thoughts...'></Title>
                <textarea className={styles.textarea} ></textarea>
                <SubmitButton title='Post' />
            </div>
            <div>
                <SubTitle title='Last 3 post on your wall' />
                <Origamis length={3}/>
            </div>
        </PageLayout>
    )
}

export default ShareThoughtsPage;