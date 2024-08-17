'use client'

import MiddleMenu from "./middle/middle";
import styles from "./nav.module.css";
import RightMenu from "./right/Right";
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>{

    const [open, setOpen] = useState(false);

    return(
        <header className={styles.container}>
            <div className={styles.logo}>
                <svg viewBox="0 0 109 33" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <radialGradient gradientUnits="userSpaceOnUse" cx="30.193" cy="-11.516" r="50" id="gradient-1">
                        <stop offset="0" style={{stopColor: 'rgb(0% 0% 0% / 0.9)'}}></stop>
                        <stop offset="1" style={{stopColor: 'rgb(0% 0% 0% / 0.9)'}}></stop>
                    </radialGradient>
                    </defs>
                    <g fill="currentColor" transform="matrix(1.072208046913147, 0, 0, 1, -0.000023000002670414688, -7.105427357601002e-15)">
                    <path d="M 79.719 6.342 L 75.599 6.342 L 75.599 26.264 L 79.719 26.264 L 79.719 6.342 Z M 52.27 6.342 L 48.151 6.342 L 48.151 26.289 L 52.271 26.289 L 52.271 6.342 L 52.27 6.342 Z M 63.885 10.467 C 66.247 10.468 68.164 12.381 68.168 14.743 L 68.168 26.302 L 72.3 26.302 L 72.3 14.743 C 72.3 10.103 68.521 6.342 63.885 6.342 C 59.237 6.342 55.471 10.115 55.471 14.743 L 55.471 26.302 L 59.603 26.302 L 59.603 14.743 C 59.607 12.381 61.523 10.468 63.885 10.467 Z M 44.902 14.73 L 36.31 14.73 L 36.31 14.114 C 36.309 12.09 37.951 10.45 39.975 10.454 L 44.888 10.454 L 44.888 6.342 L 39.975 6.342 C 35.667 6.342 32.19 9.826 32.19 14.114 L 32.19 26.276 L 36.31 26.276 L 36.31 18.843 L 44.9 18.843 L 44.9 14.731 L 44.902 14.73 Z M 18.575 5.449 L 11.898 12.115 C 10.648 13.36 8.626 13.36 7.376 12.115 C 6.129 10.868 6.129 8.847 7.376 7.6 L 14.052 0.934 C 15.302 -0.312 17.325 -0.312 18.575 0.934 C 19.822 2.166 19.822 4.204 18.575 5.449 Z M 18.512 18.617 L 12.024 25.094 C 10.774 26.339 8.752 26.339 7.502 25.094 C 6.255 23.847 6.255 21.826 7.502 20.579 L 13.989 14.102 C 15.239 12.856 17.262 12.856 18.512 14.102 C 19.759 15.349 19.759 17.37 18.512 18.617 Z M 5.46 18.526 C 6.719 17.268 6.73 15.242 5.486 13.999 C 4.242 12.756 2.212 12.769 0.952 14.026 C -0.307 15.283 -0.318 17.31 0.926 18.552 C 2.17 19.795 4.2 19.783 5.459 18.526 L 5.46 18.526 Z M 18.608 31.66 C 19.868 30.403 19.88 28.377 18.635 27.134 C 17.39 25.891 15.361 25.904 14.101 27.161 C 12.842 28.418 12.831 30.445 14.075 31.687 C 15.319 32.93 17.349 32.917 18.608 31.661 L 18.608 31.66 Z" style={{fill: "url('#gradient-1')"}}></path>
                    </g>
                </svg>
            </div>
            <div className={open ? `${styles.togbtn} ${styles.active}` : `${styles.togbtn}`} onClick={()=> setOpen((prev)=> !prev)}>
                <span></span>
                <span></span>
            </div>
            <div className={open ? `${styles.mobMenu} ${styles.active}` : `${styles.mobMenu}`}>
                <Link href="/" className={styles.menuLabel}>
                    <span>Home</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
                <Link href="/credit-cards" className={styles.menuLabel}>
                    <span>Credit cards</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
                <Link href="/banking" className={styles.menuLabel}>
                    <span>Banking</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
                <Link href="/finance" className={styles.menuLabel}>
                    <span>Personal finance</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
                <Link href="/loan" className={styles.menuLabel}>
                    <span>Loan</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
                <Link href="/insurance" className={styles.menuLabel}>
                    <span>Insurance</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
                <Link href="/auth/signin" className={styles.menuLabel}>
                    <span>Log In</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
                <Link href="/auth/register" className={styles.menuLabel}>
                    <span>Register</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" data-di-res-id="ff9497ba-ff6c6a21" data-di-rand="1721798656204"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
                </Link>
            </div>
            <div className={styles.middleMenu}>
                <MiddleMenu />
            </div>
            <div className={styles.rightMenu}>
                <RightMenu />
            </div>
        </header>
    )
}

export default Navbar;