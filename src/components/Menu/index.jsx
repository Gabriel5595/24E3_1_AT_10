import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';

export default function Menu() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobile(false);
                setIsExpanded(false);
            } else {
                setIsMobile(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <header className={styles.header}>
            <div className={styles.menuContainer}>
                <div className={styles.brand}>Brand</div>
                {isMobile && (
                    <button className={styles.menuIcon} onClick={toggleMenu}>
                        <div className={styles.iconBar}></div>
                        <div className={styles.iconBar}></div>
                        <div className={styles.iconBar}></div>
                    </button>
                )}
                {(isExpanded || !isMobile) && (
                    <nav className={styles.menuOptions}>
                        <ul>
                            <li>Opção 1</li>
                            <li>Opção 2</li>
                            <li>Opção 3</li>
                            <li>Opção 4</li>
                        </ul>
                    </nav>
                )}
                <button className={styles.profileIcon}>
                    <span role="img" aria-label="user icon">👤</span>
                </button>
            </div>
        </header>
    );
};