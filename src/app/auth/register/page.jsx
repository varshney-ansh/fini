'use client'

import PlaidLink from '@/components/plaidLink/plaidLink';
import styles from './reg.module.css';
import Link from 'next/link';
import { useState } from 'react';

const RegisterPage = () => {

    const [openCodeDiaglog, setOpenCodeDialog] = useState(false);
    const [index, setIndex] = useState(4);

    const nextform = (e, index) => {
        e.preventDefault();
        setIndex(index+1);
    }

    const prevform = () =>{
        setIndex(index-1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.backbtn} onClick={() => prevform()} style={index==0 ? {display: 'none'} : {display: 'flex'}}>
                <div className={styles.backCon}>
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <polygon points="14 26 15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26" />
                        <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" />
                    </svg>
                </div>
            </div>
            <div className={styles.brandLogo}>
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
            <div className={styles.form} style={index == 0 ? { display: 'block' } : { display: 'none' }}>
                <h1>Sign up for Fini</h1>
                <form onSubmit={(e)=>nextform(e,index)}>
                    <div className={styles.inputField}>
                        <input type="email" required placeholder=" " />
                        <label htmlFor="emailforfinisignup">Your email</label>
                    </div>
                    <input type="submit" value="Next" />
                </form>
            </div>
            <div style={index == 1 ? { display: 'block' } : { display: 'none' }} className={`${styles.phoneform} ${styles.form}`}>
                <h1>Phone number</h1>
                <form onSubmit={(e)=>{e.preventDefault(); setOpenCodeDialog(true)}}>
                    <div className={styles.inputField}>
                        <input type="tel" required placeholder=" " autoComplete="tel-national" pattern="^[0-9]{3,45}$" maxLength={10} />
                        <label htmlFor="phoneforfinisignup">Phone number</label>
                        <span className={styles.prefix}>+1</span>
                    </div>
                    <input type="submit" value="Next" />
                </form>
            </div>
            <div className={`${styles.codedialog} ${openCodeDiaglog ? `${styles.active}` : ``}`}>
                <div className={styles.nav} onClick={(e) => { setOpenCodeDialog(false) }}>
                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <polygon points="17.4141 16 24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16" />
                        <g id="_Transparent_Rectangle_" data-name="&amp;lt;Transparent Rectangle&amp;gt;">
                            <rect width="32" height="32" style={{ fill: 'none' }} />
                        </g>
                    </svg>
                </div>
                <div className={`${styles.content} ${styles.form}`}>
                    <h4>Confirm your phone</h4>
                    <p>Code sent to +1 244-856-9876</p>
                    <span>Resend code</span>
                    <form onSubmit={(e)=>{setOpenCodeDialog(false); nextform(e,index)}}>
                        <div className={styles.codebox}>
                            <input placeholder="" autoComplete="one-time-code" maxLength="6" type="tel" size="1" aria-autocomplete="none" aria-label="Security code digit 1" data-ppui="true" style={{ textAlign: 'center', caretColor: 'transparent', fontSize: '1.5rem', maxWidth: '3rem', height: '3.25rem' }} />
                            <input placeholder="" autoComplete="one-time-code" maxLength="6" type="tel" size="1" aria-autocomplete="none" aria-label="Security code digit 1" data-ppui="true" style={{ textAlign: 'center', caretColor: 'transparent', fontSize: '1.5rem', maxWidth: '3rem', height: '3.25rem' }} />
                            <input placeholder="" autoComplete="one-time-code" maxLength="6" type="tel" size="1" aria-autocomplete="none" aria-label="Security code digit 1" data-ppui="true" style={{ textAlign: 'center', caretColor: 'transparent', fontSize: '1.5rem', maxWidth: '3rem', height: '3.25rem' }} />
                            <input placeholder="" autoComplete="one-time-code" maxLength="6" type="tel" size="1" aria-autocomplete="none" aria-label="Security code digit 1" data-ppui="true" style={{ textAlign: 'center', caretColor: 'transparent', fontSize: '1.5rem', maxWidth: '3rem', height: '3.25rem' }} />
                            <input placeholder="" autoComplete="one-time-code" maxLength="6" type="tel" size="1" aria-autocomplete="none" aria-label="Security code digit 1" data-ppui="true" style={{ textAlign: 'center', caretColor: 'transparent', fontSize: '1.5rem', maxWidth: '3rem', height: '3.25rem' }} />
                            <input placeholder="" autoComplete="one-time-code" maxLength="6" type="tel" size="1" aria-autocomplete="none" aria-label="Security code digit 1" data-ppui="true" style={{ textAlign: 'center', caretColor: 'transparent', fontSize: '1.5rem', maxWidth: '3rem', height: '3.25rem' }} />
                        </div>
                        <input type="submit" value="Next" />
                    </form>
                </div>
            </div>
            <div style={index == 2 ? { display: 'block' } : { display: 'none' }} className={`${styles.form} ${styles.passdialog}`}>
                <h1>Create a password</h1>
                <form onSubmit={(e)=>nextform(e,index)}>
                    <div className={styles.inputField} style={{ marginBottom: '4px' }}>
                        <input type="password" required placeholder=" " minLength={8} />
                        <label htmlFor="passwordforfinisignup">Create password</label>
                    </div>
                    <li>8 or more characters</li>
                    <li>Use 2 of the following: letters, numbers or symbols</li>
                    <input type="submit" value="Next"/>
                </form>
            </div>
            <div style={index == 3 ? { display: 'block' } : { display: 'none' }} className={`${styles.form} ${styles.infodialog}`}>
                <h1>Personal information</h1>
                <p>Make sure this matches your official ID.</p>
                <form onSubmit={(e)=>nextform(e,index)}>
                    <div className={styles.inputField} style={{ marginBottom: '4px' }}>
                        <input type="text" required placeholder=" " minLength={3} />
                        <label htmlFor="firstnameforfinisignup">First Name</label>
                    </div>
                    <div className={styles.inputField} style={{ marginBottom: '4px' }}>
                        <input type="text" required placeholder=" " minLength={3} />
                        <label htmlFor="lastnameforfinisignup">Last Name</label>
                    </div>
                    <div className={styles.inputField} style={{ marginBottom: '4px' }}>
                        <input
                            className={styles.ssninput}
                            id="ssn"
                            inputMode="numeric"
                            name="ssn"
                            placeholder=""
                            pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$"
                            aria-describedby="ssnHint"
                        />
                        <label htmlFor="lastnameforfinisignup">Social Security Number</label>
                    </div>
                    <input type="submit" value="Next"/>
                </form>
            </div>
            <div style={index == 4 ? { display: 'block' } : { display: 'none' }} className={`${styles.form} ${styles.passdialog}`}>
                <h1>Link your bank account</h1>
                <div className={styles.formsvg}>
                    <svg viewBox="0 0 37 41" xmlns="http://www.w3.org/2000/svg" width="50px" height="88px" fill="#2C2E2F">
                        <g transform="translate(.906 1)" fill="none" fillRule="evenodd">
                            <g stroke="#020303" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".9">
                                <path d="M6.019 10.156v13.33M10.62 26.924H4.261a.686.686 0 0 0-.702.678v1.992c0 .374-.315.678-.715.678H.74c-.393 0-.713.296-.713.677v1.992c0 .375.31.678.7.678h32.146a.686.686 0 0 0 .701-.678V30.95c0-.374-.314-.677-.715-.677h-2.102c-.395 0-.715-.298-.715-.678v-1.992a.693.693 0 0 0-.7-.678H13.969a.688.688 0 0 1-.7-.675V10.235" />
                                <path d="M27.394 21.554v-11.37c0-.459.4-.83.88-.83h3.712c1.365 0 1.496-.51.305-1.13L17.725.632c-.51-.266-1.344-.264-1.849 0L1.31 8.225c-1.195.622-1.056 1.128.307 1.128h17.832c.489 0 .884.372.884.83v14.231" />
                            </g>
                            <ellipse cx="27.391" cy="30.949" rx="8.609" ry="8.227" fill="#FFF" />
                            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth=".9">
                                <path
                                    d="m27.247 37.904c3.811 0 6.9-3.048 6.9-6.807 0-3.76-3.089-6.808-6.9-6.808-3.81 0-6.9 3.048-6.9 6.808s3.09 6.807 6.9 6.807z"
                                    stroke="#020303"
                                />
                                <path d="m31.08 30.845h-7.666m4.089-3.53v7.564" stroke="#2C2E2F" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={styles.textCon}>
                    <li>Withdraw and deposit funds to your bank.</li>
                    <li>Analyse your bank account more deaper.</li>
                    <li>Your identity should be linked with your bank.</li>
                </div>
                <PlaidLink />
            </div>
        </div>
    )
}

export default RegisterPage;