import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './index.module.css';
import Origam from '../origam';

const Origamis = (props) => {
    const [origamis, setOrigamis] = useState([]);

    const getOrigamis = useCallback(async () => {
        const { length } = props;
        const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`);
        const origamis = await promise.json();

        setOrigamis(origamis);
    }, [props])

    useEffect(() => {
        getOrigamis();
    }, [getOrigamis, props.updatedOrigami])

    const renderOrigamis = useMemo(() => {
        return origamis.map((origam, index) => {
            return (
                <Origam key={origam._id} index={index} {...origam} />
            )
        });
    }, [origamis]);

    return (
        <div className={styles['origamis-wrapper']}>
            {renderOrigamis}
        </div>
    )
}


export default Origamis;