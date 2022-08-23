import type { NextPage } from 'next'
import UserProfile from '../../components/userprofile/UserProfile'
import Post from '../../components/post/Post'

const ProfilePage: NextPage = () => {
  return (
    <div className="profile">
            <div className="profileWrapper">
                <UserProfile/>
                <div className="tabList" role='tablist'>
                    <div className="tabListItem activeTab">
                        <img src="/assets/icons/socialIcon/personalFeedIcon.svg" alt="" className="tabListItemIcon" />
                        <span className='tabListItemText'>Feed</span>
                    </div>
                    <div className="tabListItem">
                        <img src="/assets/icons/socialIcon/bookmarkIcon.svg" alt="" className="tabListItemIcon" />
                        <span className='tabListItemText'>Saved</span>
                    </div>
                    <div className="tabListItem">
                        <img src="/assets/icons/socialIcon/heartIcon.svg" alt="" className="tabListItemIcon" />
                        <span className='tabListItemText'>Liked</span>
                    </div>
                </div>

                <div className="profilePostContainer">
                    <Post/>
                </div>
            </div>
        </div>
  );
}

export default ProfilePage
