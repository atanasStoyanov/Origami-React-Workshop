import React, { Component } from 'react';
import styles from './index.module.css';
import Link from '../link';
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context';

class Header extends Component {
    static contextType = UserContext;

    render() {
        const {
            loggedIn,
            user
        } = this.context;
        
        const links = getNavigation(loggedIn, user);

        return (
            <header className={styles.navigation} >
                <img src={logo} className={styles.logo} alt='logo' />
                {
                    links.map(navElement => {
                        return (
                            <Link key={navElement.title} href={navElement.link} title={navElement.title} type="header" />
                        )
                    })
                }
            </header >
        )
    }
}

export default Header;