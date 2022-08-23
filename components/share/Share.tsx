import styles from './Share.module.css';

export function Share() {
  return (
    <div className={styles.share}>
        <div className={styles.shareWrapper}>
            <div className={styles.shareTop}>
                <img className={styles.shareProfileImage} src="/assets/icons/socialIcon/smUserProfileIcon.svg" alt="avatar" />
                <input type="text" className={styles.shareInput} placeholder="What's on your mind?"/>
            </div>
            <div className={styles.shareBottom}>
                <div className={styles.shareOptions}>
                    <img className={styles.shareIcon} src="/assets/icons/socialIcon/imageIcon.svg" alt="photo" />
                    <img className={styles.shareIcon} src="/assets/icons/socialIcon/gifIcon.svg" alt="gif" />
                    <img className={styles.shareIcon} src="/assets/icons/socialIcon/pollIcon.svg" alt="polls" />
                    <img className={styles.shareIcon} src="/assets/icons/socialIcon/emojiIcon.svg" alt="emoji" />
                </div>
                <div className={styles.shareBottomButton}>
                    <span>Post</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share