import NoticeBoard from '../noticeboard/NoticeBoard'
import Sidebar from '../sidebar/Sidebar'
import styles from './Layout.module.css'

function Layout(props:any) {
  return (
    <div className={styles.app}>
        <Sidebar/>
        <div className={styles.main}>{props.children}</div>
        <NoticeBoard/>
    </div>
  )
}

export default Layout