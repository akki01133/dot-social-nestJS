import styles from './Feed.module.css';
import Share from '../share/Share'
import Post from '../post/Post';
function Feed() {
  return (
    <div className={styles.feed}>
        <div className={styles.feedTitle}>
          <span>Home</span>
        </div>
        <Share/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed