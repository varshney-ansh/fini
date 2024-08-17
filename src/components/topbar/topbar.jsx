import Image from "next/image";
import Link from "next/link";
import styles from './top.module.css'
const TopBarMenu = () => {

    const newMessage = true;

    return (
        <div className={styles.topbar}>
            <div className={styles.rightmenu}>
                <Link href="#">
                    <Image src={`/profile.jpg`} width={32} height={32} />
                    <span className={styles.pro}>
                        <span>Ansh Varshney</span>
                        <span>New York</span>
                    </span>
                </Link>
                <Link href="#">
                    {
                        newMessage ? (
                            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path d="M26,16.5859V14H24v3a1,1,0,0,0,.293.707L27,20.4141V22H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13A7.9854,7.9854,0,0,1,20,6.0825V3.8467a9.896,9.896,0,0,0-3-.7959V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.293,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v1a5,5,0,0,0,10,0V24h7a1,1,0,0,0,1-1V20a1,1,0,0,0-.293-.707ZM19,25a3,3,0,0,1-6,0V24h6Z" />
                                <circle cx="26" cy="8" r="4" />
                                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{ fill: 'none' }} width="32" height="32" />
                            </svg>
                        ) : (
                            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>
                                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{fill: 'none'}} width="32" height="32"/>
                            </svg>
                        )
                    }                    
                </Link>
            </div>
        </div>
    )
}

export default TopBarMenu;