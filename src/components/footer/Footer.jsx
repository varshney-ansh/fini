import localFont from "next/font/local";
import styles from './footer.module.css';

const Footer = () =>{
    return(
        <footer className={`${styles.container}`}>
            <div className={styles.footerCon} >
            <div className={styles.brand}>
                <svg viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
                    <defs></defs>
                    <g transform="matrix(1, 0, 0, 1, -5.543678, 4.504209)">
                        <g>
                            <path d="M 41.42 71.998 C 46.133 67.294 46.178 59.709 41.521 55.059 C 36.862 50.408 29.265 50.452 24.553 55.158 C 19.839 59.864 19.796 67.447 24.454 72.098 C 29.11 76.748 36.707 76.704 41.419 71.998 L 41.42 71.998 Z" style={{fill: 'rgb(255, 255, 255)', stroke: 'rgb(0, 20, 53)'}}></path>
                            <path d="M 36.915 68.186 C 41.628 63.482 41.673 55.897 37.016 51.247 C 32.357 46.596 24.76 46.64 20.048 51.346 C 15.334 56.052 15.291 63.635 19.949 68.286 C 24.605 72.936 32.202 72.892 36.914 68.186 L 36.915 68.186 Z" style={{fill: 'rgb(255, 255, 255)', stroke: 'rgb(0, 20, 53)'}}></path>
                        </g>
                        <g>
                            <path d="M 89.462 26.181 L 64.478 51.126 C 59.812 55.784 52.22 55.784 47.555 51.126 C 42.889 46.466 42.888 38.887 47.555 34.229 L 72.539 9.282 C 77.205 4.623 84.797 4.623 89.463 9.282 C 94.131 13.895 94.131 21.52 89.463 26.181 L 89.462 26.181 Z" style={{fillRule: 'nonzero', paintOrder: 'stroke', fill: 'rgb(255, 255, 255)', strokeWidth: '12px', stroke: 'rgb(0, 20, 53)'}}></path>
                            <path d="M 81.148 20.638 L 56.164 45.583 C 51.498 50.241 43.906 50.241 39.241 45.583 C 34.575 40.923 34.574 33.344 39.241 28.686 L 64.225 3.739 C 68.891 -0.92 76.483 -0.92 81.149 3.739 C 85.817 8.352 85.817 15.977 81.149 20.638 L 81.148 20.638 Z" style={{fillRule: 'nonzero', paintOrder: 'fill', fill: 'rgb(255, 255, 255)', stroke: 'rgb(0, 20, 53)'}}></path>
                        </g>
                        <g transform="matrix(1, 0, 0, 1, 4.504, 3.465)">
                            <path d="M 90.611 66.798 L 66.335 91.037 C 61.668 95.697 54.078 95.697 49.41 91.037 C 44.744 86.376 44.744 78.799 49.41 74.139 L 73.689 49.9 C 78.356 45.24 85.946 45.24 90.611 49.9 C 95.279 54.56 95.279 62.137 90.611 66.798 Z" style={{fill: 'rgb(255, 255, 255)', stroke: 'rgb(0, 20, 53)'}}></path>
                            <path d="M 86.107 60.56 L 61.831 84.799 C 57.164 89.459 49.574 89.459 44.906 84.799 C 40.24 80.138 40.24 72.561 44.906 67.901 L 69.185 43.662 C 73.852 39.002 81.442 39.002 86.107 43.662 C 90.775 48.322 90.775 55.899 86.107 60.56 Z" style={{fill: 'rgb(255, 255, 255)', stroke: 'rgb(0, 20, 53)'}}></path>
                        </g>
                        <g transform="matrix(1, 0, 0, 1, 5.543625, 2.425335)">
                            <path d="M 95.133 111.799 C 99.845 107.095 99.889 99.509 95.232 94.86 C 90.574 90.209 82.978 90.254 78.266 94.96 C 73.553 99.664 73.509 107.249 78.166 111.899 C 82.822 116.55 90.419 116.505 95.131 111.799 L 95.133 111.799 Z" style={{fill: 'rgb(255, 255, 255)', paintOrder: 'fill', stroke: 'rgb(0, 20, 53)'}}></path>
                            <path d="M 89.589 108.334 C 94.301 103.63 94.345 96.044 89.688 91.395 C 85.03 86.744 77.434 86.789 72.722 91.495 C 68.009 96.199 67.965 103.784 72.622 108.434 C 77.278 113.085 84.875 113.04 89.587 108.334 L 89.589 108.334 Z" style={{fill: 'rgb(255, 255, 255)', paintOrder: 'fill', stroke: 'rgb(0, 20, 53)'}}></path>
                        </g>
                    </g>
                </svg>
                <span>Fini</span>
            </div>
            <div className={styles.mainLink}>
                <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Fees</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Banking</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Enterprise</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
            </div>
            <div className={styles.mainLink}>
                <hr className={styles.hr}/>
            </div>
            <div className={`${styles.mainLink} ${styles.corp}`}>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Public Policy</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Legal</a></li>
                </ul>
                <hr className={styles.hr}/>
                <ul>
                    <li style={{margin: '20px 0px 0px 0px'}}><span>© 2024–2025</span></li>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;