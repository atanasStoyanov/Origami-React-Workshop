import React, { useState } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';
import SubTitle from '../../components/sub-title';
import getCookie from '../../utils/getCookie';


const ShareThoughtsPage = () => {
    const [publication, setPublication] = useState('');
    const [updatedOrigami, setUpdatedOrigami] = useState([]);

    const handleSubmit = async () => {
        await fetch('http://localhost:9999/api/origami', {
            method: 'POST',
            body: JSON.stringify({
                description: publication
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        });

        setPublication('');
        setUpdatedOrigami([...updatedOrigami, 1]);
    }


    return (
        <PageLayout>
            <div>
                <Title title='Share your thoughts...'></Title>
                <textarea value={publication} onChange={e => setPublication(e.target.value)} className={styles.textarea}  ></textarea>
                <SubmitButton title='Post' onClick={handleSubmit} />
            </div>
            <div>
                <SubTitle title='Last 3 post on your wall' />
                <Origamis length={3} updatedOrigami={updatedOrigami} />
            </div>
        </PageLayout>
    )
}

export default ShareThoughtsPage;