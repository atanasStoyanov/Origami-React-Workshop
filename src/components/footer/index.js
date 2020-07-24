import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird-flipped.png';
import getNavigation from '../../utils/navigation';

const Footer = () => {
    const links = getNavigation();

    return (
        <footer>
            <div className={styles.footer}>
            {
                links.map(navElement => {
                    return (
                        <Link href={navElement.link} title={navElement.title} type="footer" />
                    )
                })
            }
            <img className={styles.logo} src={image}/>
            <p className={styles.university}>Software University 2020</p>
            </div>
        </footer>
    )
}

export default Footer;