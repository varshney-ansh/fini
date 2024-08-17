import Link from 'next/link';
import styles from './right.module.css';

const RightMenu = () =>{
    return(
        <div className={styles.container}>
           <Link href="/auth/signin">Log in</Link>
           <Link href="/auth/register">Register</Link>
        </div>
    )
}

export default RightMenu;