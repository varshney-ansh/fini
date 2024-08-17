import styles from './side.module.css';
import Link from 'next/link';

const SideBarMenu = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.brand}>
                <svg viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
                    <defs />
                    <g>
                        <path d="M 41.42 71.998 C 46.133 67.294 46.178 59.709 41.521 55.059 C 36.862 50.408 29.265 50.452 24.553 55.158 C 19.839 59.864 19.796 67.447 24.454 72.098 C 29.11 76.748 36.707 76.704 41.419 71.998 L 41.42 71.998 Z" style={{ fill: 'rgb(0, 112, 224)' }} />
                        <path d="M 36.915 68.186 C 41.628 63.482 41.673 55.897 37.016 51.247 C 32.357 46.596 24.76 46.64 20.048 51.346 C 15.334 56.052 15.291 63.635 19.949 68.286 C 24.605 72.936 32.202 72.892 36.914 68.186 L 36.915 68.186 Z" style={{ fill: 'rgb(0, 28, 100)' }} />
                    </g>
                    <g>
                        <path d="M 89.462 26.181 L 64.478 51.126 C 59.812 55.784 52.22 55.784 47.555 51.126 C 42.889 46.466 42.888 38.887 47.555 34.229 L 72.539 9.282 C 77.205 4.623 84.797 4.623 89.463 9.282 C 94.131 13.895 94.131 21.52 89.463 26.181 L 89.462 26.181 Z" style={{ fill: 'rgb(0, 112, 224)' }} />
                        <path d="M 81.148 20.638 L 56.164 45.583 C 51.498 50.241 43.906 50.241 39.241 45.583 C 34.575 40.923 34.574 33.344 39.241 28.686 L 64.225 3.739 C 68.891 -0.92 76.483 -0.92 81.149 3.739 C 85.817 8.352 85.817 15.977 81.149 20.638 L 81.148 20.638 Z" style={{ fill: 'rgb(0, 28, 100)' }} />
                    </g>
                    <g transform="matrix(1, 0, 0, 1, 4.504, 3.465)">
                        <path d="M 90.611 66.798 L 66.335 91.037 C 61.668 95.697 54.078 95.697 49.41 91.037 C 44.744 86.376 44.744 78.799 49.41 74.139 L 73.689 49.9 C 78.356 45.24 85.946 45.24 90.611 49.9 C 95.279 54.56 95.279 62.137 90.611 66.798 Z" style={{ fill: 'rgb(0, 112, 224)' }} />
                        <path d="M 86.107 60.56 L 61.831 84.799 C 57.164 89.459 49.574 89.459 44.906 84.799 C 40.24 80.138 40.24 72.561 44.906 67.901 L 69.185 43.662 C 73.852 39.002 81.442 39.002 86.107 43.662 C 90.775 48.322 90.775 55.899 86.107 60.56 Z" style={{ fill: 'rgb(0, 28, 100)' }} />
                    </g>
                    <g transform="matrix(1, 0, 0, 1, 5.543625, 2.425335)">
                        <path d="M 95.133 111.799 C 99.845 107.095 99.889 99.509 95.232 94.86 C 90.574 90.209 82.978 90.254 78.266 94.96 C 73.553 99.664 73.509 107.249 78.166 111.899 C 82.822 116.55 90.419 116.505 95.131 111.799 L 95.133 111.799 Z" style={{ fill: 'rgb(0, 112, 224)' }} />
                        <path d="M 89.589 108.334 C 94.301 103.63 94.345 96.044 89.688 91.395 C 85.03 86.744 77.434 86.789 72.722 91.495 C 68.009 96.199 67.965 103.784 72.622 108.434 C 77.278 113.085 84.875 113.04 89.587 108.334 L 89.589 108.334 Z" style={{ fill: 'rgb(0, 28, 100)' }} />
                    </g>
                </svg>
            </div>
            <div className={styles.sidemenu}>
                <Link href="#" className={styles.active}>
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" />
                        <path d="M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z" transform="translate(0 0)" />
                    </svg>
                    <span>Home</span>
                </Link>
                <Link href="#">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>activity</title><path d="M12,29a1,1,0,0,1-.92-.62L6.33,17H2V15H7a1,1,0,0,1,.92.62L12,25.28,20.06,3.65A1,1,0,0,1,21,3a1,1,0,0,1,.93.68L25.72,15H30v2H25a1,1,0,0,1-.95-.68L21,7,12.94,28.35A1,1,0,0,1,12,29Z" /><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" /></svg>
                    <span>Activity</span>
                </Link>
                <Link href="#">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>banks</title><rect x="2" y="28" width="28" height="2" /><path d="M27,11a1,1,0,0,0,1-1V7a1,1,0,0,0-.66-.94l-11-4a1,1,0,0,0-.68,0l-11,4A1,1,0,0,0,4,7v3a1,1,0,0,0,1,1H6V24H4v2H28V24H26V11ZM6,7.7,16,4.06,26,7.7V9H6ZM18,24H14V11h4ZM8,11h4V24H8ZM24,24H20V11h4Z" transform="translate(0 0)" /><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" /></svg>
                    <span>Banks</span>
                </Link>
                <Link href="#">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>wallet</title><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" /><rect x="22" y="17" width="2" height="2" /><path d="M28,8H4V5H26V3H4A2,2,0,0,0,2,5V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM4,26V10H28v3H20a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h8v3ZM28,15v6H20V15Z" /></svg>
                    <span>Wallet</span>
                </Link>
                <Link href="#">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>cards</title><path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6Zm0,2v3H4V8ZM4,24V13H28V24Z" transform="translate(0 0)" /><rect x="6" y="20" width="10" height="2" /><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" /></svg>
                    <span>Cards</span>
                </Link>
                <Link href="#">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>pay</title><path d="M27.45,15.11l-22-11a1,1,0,0,0-1.08.12,1,1,0,0,0-.33,1L7,16,4,26.74A1,1,0,0,0,5,28a1,1,0,0,0,.45-.11l22-11a1,1,0,0,0,0-1.78Zm-20.9,10L8.76,17H18V15H8.76L6.55,6.89,24.76,16Z" /><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" /></svg>
                    <span>Transfer</span>
                </Link>
                
            </div>
            <div className={styles.sidemenu}>
            <Link href="#">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>settings</title><path d="M27,16.76c0-.25,0-.5,0-.76s0-.51,0-.77l1.92-1.68A2,2,0,0,0,29.3,11L26.94,7a2,2,0,0,0-1.73-1,2,2,0,0,0-.64.1l-2.43.82a11.35,11.35,0,0,0-1.31-.75l-.51-2.52a2,2,0,0,0-2-1.61H13.64a2,2,0,0,0-2,1.61l-.51,2.52a11.48,11.48,0,0,0-1.32.75L7.43,6.06A2,2,0,0,0,6.79,6,2,2,0,0,0,5.06,7L2.7,11a2,2,0,0,0,.41,2.51L5,15.24c0,.25,0,.5,0,.76s0,.51,0,.77L3.11,18.45A2,2,0,0,0,2.7,21L5.06,25a2,2,0,0,0,1.73,1,2,2,0,0,0,.64-.1l2.43-.82a11.35,11.35,0,0,0,1.31.75l.51,2.52a2,2,0,0,0,2,1.61h4.72a2,2,0,0,0,2-1.61l.51-2.52a11.48,11.48,0,0,0,1.32-.75l2.42.82a2,2,0,0,0,.64.1,2,2,0,0,0,1.73-1L29.3,21a2,2,0,0,0-.41-2.51ZM25.21,24l-3.43-1.16a8.86,8.86,0,0,1-2.71,1.57L18.36,28H13.64l-.71-3.55a9.36,9.36,0,0,1-2.7-1.57L6.79,24,4.43,20l2.72-2.4a8.9,8.9,0,0,1,0-3.13L4.43,12,6.79,8l3.43,1.16a8.86,8.86,0,0,1,2.71-1.57L13.64,4h4.72l.71,3.55a9.36,9.36,0,0,1,2.7,1.57L25.21,8,27.57,12l-2.72,2.4a8.9,8.9,0,0,1,0,3.13L27.57,20Z" transform="translate(0 0)" /><path d="M16,22a6,6,0,1,1,6-6A5.94,5.94,0,0,1,16,22Zm0-10a3.91,3.91,0,0,0-4,4,3.91,3.91,0,0,0,4,4,3.91,3.91,0,0,0,4-4A3.91,3.91,0,0,0,16,12Z" transform="translate(0 0)" /><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" /></svg>
                    <span>Settings</span>
                </Link>
                <Link href="#">
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>logout</title><path d="M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z" /><polygon points="20.586 20.586 24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586" /><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" /></svg>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    )
}

export default SideBarMenu;