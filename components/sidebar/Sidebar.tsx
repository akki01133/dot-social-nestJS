import styles from './Sidebar.module.css'
import Link from 'next/link';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarWrapper}>
            <div className={styles.logo}>
               <span> .Socia<span>L</span> </span>
            </div>

            <ul className={styles.sidebarList}>
                <Link href="/">
                    <li className={styles.sidebarListItem}>
                        <img src="/assets/icons/sidebarIcon/homeIcon.svg" alt="home" className={styles.sidebarListItemIcon}/>
                        <span className={styles.sidebarListItemText}>Home</span>
                    </li>
                </Link>
                <Link href="/notifications">
                    <li className={styles.sidebarListItem}>
                        <img src="/assets/icons/sidebarIcon/notificationRed.svg" alt="home" className={styles.sidebarListItemIcon}/>
                        <span className={styles.sidebarListItemText}>Notification</span>
                    </li>
                </Link>
                <Link href="/notifications">
                    <li className={styles.sidebarListItem}>
                        <img src="/assets/icons/sidebarIcon/topicsIcon.svg" alt="home" className={styles.sidebarListItemIcon}/>
                        <span className={styles.sidebarListItemText}>Topics</span>
                    </li>
                </Link>
                <Link href="/">
                    <li className={styles.sidebarListItem}>
                        <img src="/assets/icons/sidebarIcon/archiveIcon.svg" alt="home" className={styles.sidebarListItemIcon}/>
                        <span className={styles.sidebarListItemText}>Archived</span>
                    </li>
                </Link>
                <Link href="/profile">
                    <li className={styles.sidebarListItem}>
                        <img src="/assets/icons/sidebarIcon/profileIcon.svg" alt="home" className={styles.sidebarListItemIcon}/>
                        <span className={styles.sidebarListItemText}>Profile</span>
                    </li>
                </Link>
                <Link href="/">
                    <li className={styles.sidebarListItem}>
                        <img src="/assets/icons/sidebarIcon/moreIcon.svg" alt="home" className={styles.sidebarListItemIcon}/>
                        <span className={styles.sidebarListItemText}>More</span>
                    </li>
                </Link>
            </ul>

            <div className={styles.logoutButton}>
                <span>Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar