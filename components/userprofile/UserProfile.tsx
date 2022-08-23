import styles from './Userprofile.module.css';

function UserProfile() {
    return (
        <header className={styles.userProfile}>
            <div className={styles.userprofileLeft}>
                    <img src="/assets/images/instaProfile.jpg" alt="userProfile" className={styles.userProfileImage} />
            </div>

            <div className={styles.userProfileRight}>
                <div className={styles.userProfileRightTop}>
                    <span className={styles.userIdText}>ajeetkr__</span>
                    <span className={styles.editProfileBtn}>Edit Profile</span>
                    <img src="/assets/icons/sidebarIcon/settingIcon.svg" alt="settings" className={styles.settingIcon} />
                </div>

                <div className={styles.userProfileRightCenter}>
                    <div className={styles.userPopularity}>
                        <span className={styles.numPopularity}>3</span>
                        <p className={styles.popularityType}>posts</p>
                    </div>
                    <div className={styles.userPopularity}>
                        <span className={styles.numPopularity}>119</span>
                        <p className={styles.popularityType}>followers</p>
                    </div>
                    <div className={styles.userPopularity}>
                        <span className={styles.numPopularity}>222</span>
                        <p className={styles.popularityType}>following</p>
                    </div>
                </div>

                <div className={styles.userProfileRightBottom}>
                    <span className={styles.userProfileName}>
                        Ajeet Kumar
                    </span>
                    <span className={styles.userProfileBio}>
                        #iitdelhi<br></br>
                        #navodayan
                    </span>
                </div>
            </div>
        </header>
    );
}

export default UserProfile;