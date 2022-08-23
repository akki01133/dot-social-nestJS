import styles from  './NoticeBoard.module.css';

function NoticeBoard() {
  return (
    <div className={styles.noticeboard}>
       <div className={styles.noticeboardWrapper}>
          <div className={styles.noticeHeader}>
              <div className={styles.noticeSearchBar}>
                <img src="/assets/icons/socialIcon/searchIcon.svg" alt="search" className={styles.noticeSearchBarIcon} />
                <input type="text" className={styles.noticeSearchBarInput} placeholder="Search"/>
              </div>
          </div>
          <div className={styles.noticeBody}>
            <div className={styles.noticeBodyContainer}>
              <span>NoticeBoard</span>
              <ul className={styles.noticeList}>
                <Notice/>
                <Notice/>
              </ul>
              <p className={styles.noticeShowMore}>Show More</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export function Notice(){
  return (
    <div className={styles.notice}>
      <div className={styles.noticeTop}>
        <span className={styles.noticeHeading}>TLDR; OUT!!</span>
      </div>
      <div className={styles.noticeCenter}>
        <p className={styles.noticeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua
        </p>
        <img className={styles.noticeImage} src="/assets/images/noticeImage.png" alt="noticeImg" />
      </div>
      <div className={styles.noticeBottom}>
        <img className={styles.noticeMoreIcon} src="assets/icons/sidebarIcon/moreIcon.svg" alt="more" />
      </div>
    </div>
  )
}

export default NoticeBoard