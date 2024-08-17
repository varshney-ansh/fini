import Link from 'next/link';
import styles from './middle.module.css';

const MiddleMenu = () =>{
    return(
        <div className={styles.menu}>
            <Link href="/">Home</Link>
            <Link href="/credit-cards">Credit cards</Link>
            <Link href="/banking">Banking</Link>
            <Link href="/finance">Personal finance</Link>
            <Link href="/loan">Loan</Link>
            <Link href="/insurance">Insurance</Link>
        </div>
    )
}

export default MiddleMenu;