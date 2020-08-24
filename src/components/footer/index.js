import React, { Component } from 'react';
import Link from '../link';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird-flipped.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

class Footer extends Component {
    static contextType = UserContext;

    render() {
        const {
            loggedIn,
            user
        } = this.context;

        const links = getNavigation(loggedIn, user);

        return (
            <footer>
                <div className={styles.footer}>
                    {
                        links.map(navElement => {
                            return (
                                <Link key={navElement.title} href={navElement.link} title={navElement.title} type="footer" />
                            )
                        })
                    }
                    <img className={styles.logo} src={image} alt='logo'/>
                    <p className={styles.university}>Software University 2020</p>
                </div>
            </footer>
        )
    }
}

export default Footer;