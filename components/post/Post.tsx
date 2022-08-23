import styles from './Post.module.css'

function Post() {
  return (
    <div className={styles.post}>
        <div className={styles.postWrapper}>
            <div className={styles.postCategory}>
                <img src="/assets/icons/socialIcon/messageOutlineIcon.svg" alt="" />
                <span className={styles.postCategoryText}>Technology</span>
            </div>
            <div className={styles.postContent}>
                <div className={styles.postLeft}>
                    <img className={styles.postProfileImage} src="/assets/images/userProfile1.png" alt="user" />
                </div>
                <div className={styles.postRight}>
                    <div className={styles.postRightTop}>
                        <span className={styles.postUserName}>Yamini Vijay Khajekar</span>
                        <img className={styles.postMoreIcon} src="/assets/icons/sidebarIcon/moreIcon.svg" alt="more" />
                    </div>
                    <div className={styles.postRightMiddle}>
                        <p className={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <img className={styles.postImage} src="/assets/images/feedImage1.png" alt="" />
                    </div>

                    <div className={styles.postRightBottom}>
                        <img src="/assets/icons/socialIcon/commentIcon.svg" alt="" className={styles.socialMediaIcon}  />
                        <img src="/assets/icons/socialIcon/likeIcon.svg" alt="" className={styles.socialMediaIcon}  />
                        <img src="/assets/icons/socialIcon/bookmarkIcon.svg" alt="" className={styles.socialMediaIcon}  />
                        <img src="/assets/icons/socialIcon/shareIcon.svg" alt="" className={styles.socialMediaIcon}  />
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Post