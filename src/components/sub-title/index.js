import React from 'react';
import styles from './index.module.css';

const SubTitle = ({title}) => {

    return(
        <h2 className={styles['sub-title']}>{title}</h2>
    )
}

export default SubTitle;