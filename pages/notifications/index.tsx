import styles from '../../styles/Notification.module.css'
import { NtfEntity, notifications } from '../../components/NotificationTile/NotificationModels'
import NotificationTile from '../../components/NotificationTile/NotificationTile'

function Notification(props:any) {

  return (
    <div className={styles.notifications}>
      <div className={styles.notificationListWrapper }>
        <h4>Today</h4>
        <NotificationList notifList={notifications.today} />
      </div>
      <div className={styles.notificationListWrapper }>
        <h4>Yesterday</h4>
        <NotificationList notifList={notifications.yesterday} />
      </div>
      <div className={styles.notificationListWrapper}>
        <h4>This Week</h4>
        <NotificationList notifList={notifications.thisWeek} />
      </div>
    </div>
  )
}

export default Notification

const NotificationList = (props:{notifList :NtfEntity[]}) => {
  const {notifList} = props;
  return (
    <ul className={styles.notificationList}>
      {
        notifList.map((notification, index) => {
          return(
          <li key={index} className={styles.notificationListItem}>
            <a href='/post' className={styles.notificationListItemLink}>
              <NotificationTile notification = {notification}/>
            </a>
          </li>
          )
        })
      }
    </ul>
  )
}



