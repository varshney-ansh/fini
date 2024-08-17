import SideBarMenu from '@/components/sidebar/sidebar';
import styles from './dash.module.css';
import Link from 'next/link';
import Image from 'next/image';
import TopBarMenu from '@/components/topbar/topbar';

const DashboardPage = () => {
    return (
        <div className={styles.container}>
            <SideBarMenu />
            <TopBarMenu />
            <div className={styles.dashContainer}>
                
            </div>
        </div>
    )
}

export default DashboardPage;