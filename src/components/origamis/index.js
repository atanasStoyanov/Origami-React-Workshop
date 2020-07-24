import React, { Component, Fragment } from 'react';
import styles from './index.module.css';
import Origam from '../origam';
import Title from '../title';

class Origamis extends Component {
    constructor(props) {
        super(props);

        this.state = {
            origamis: []
        }
    }

    getOrigamis = async () => {
        const promise = await fetch('http://localhost:9999/api/origami');
        const origamis = await promise.json();

        this.setState({
            origamis
        });
    }

    renderOrigamis() {
        const { origamis } = this.state;

        return origamis.map((origam, index) => {
            return (
                <Origam key={origam._id} index={index} {...origam} />
            )
        });
    }

    componentDidMount() {
        this.getOrigamis();
    }

    render() {

        return (
            <Fragment>
                <Title title="Publications" />
                <div className={styles['origamis-wrapper']}>
                    {this.renderOrigamis()}
                </div>
            </Fragment>

        )
    }
}

export default Origamis;