import { CommentObject, NtfEntity, NtfType, LikedObject, SavedObject, InfoObject } from './NotificationModels';
import styles from './NotificationTile.module.css'
  
const SingleLeadingImage = (props: any) => {
  const { leadingImage } = props
  return (
    <div className={styles.singleLeadingImage}>
      <img src={leadingImage} alt="" className={styles.leadingImage}  />
    </div>
  )
}

const getTime = (time : number) =>{
  return '2m';
}

const LikedTile = (props:{notification: LikedObject}) =>{
   const { users, otherCount, feedInfo, time } = props.notification;

   const DoubleLeadingImage = (props: any) => {
    const { leadingImages } = props
    return (
      <div className={styles.doubleLeadingImage}>
        <img src={leadingImages[0]} alt="backUser" className={styles.belowImage}  />
        <img src={leadingImages[1]} alt="frontUser" className={styles.frontImage}  />
      </div>
    )
    }
   const Leading = () =>{
      return(
         <> {
            users.length === 1
              ? <SingleLeadingImage leadingImage={users[0].imageUrl} />
              : <DoubleLeadingImage leadingImages={[users[0].imageUrl, users[1].imageUrl]} />
          }
          </>
      );
   }

   const Title = () => {
      return(
        <p className={styles.nfcTitle}>
         {users.length === 1
          ? <strong>{users[0].name}</strong> 
          : <strong>{users[0].name}, {users[1].name}</strong>
         }
         {
          otherCount !== 0 && ` and ${otherCount} `
         }
         liked your post in {feedInfo.category}
         <span className={styles.nfcTimeBefore}>
            {getTime(time)}
         </span>
        </p>

      );
   }

    return (
      <div className={styles.notificationTile}>
        <div className={styles.leftColumn}>
          <Leading/>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.nfcWrapper}>
            <div className={styles.nfcText}>   
                <Title/>
            </div>
            {
              feedInfo.image != null &&
              <div className={styles.endImage}>
                <img src={feedInfo.image} alt="" className={styles.endImageWrapper}  />
              </div>
              }
          </div>
          
        </div>
      </div>
    );
}

const CommentTile = (props:{notification: CommentObject}) =>{
  const {user, comment, feedInfo, time, postPreview} = props.notification;

  const Title = () =>{
    return (
      <p className={styles.nfcTitle}>
         {
           <strong>{user.name}</strong> 
         }
         {' commented: '} <br></br>
         {comment}
         <span className={styles.nfcTimeBefore}>
            {getTime(time)}
         </span>
        </p>
    )
  }

  return (
    <div className={styles.notificationTile}>
      <div className={styles.leftColumn}>
        <SingleLeadingImage leadingImage={user.imageUrl}/>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.nfcWrapper}>
          <div className={styles.nfcText}>   
              <Title/>
          </div>
          {
            feedInfo.image != null &&
            <div className={styles.endImage}>
              <img src={feedInfo.image} alt="" className={styles.endImageWrapper}  />
            </div>
          }
        </div>
        { postPreview && <PostPreviewBuilder postPreview={postPreview} />}
        
      </div>
    </div>
  );
}

const SavedTile = (props:{notification: SavedObject}) =>{
  const {user, feedInfo, time} = props.notification;
  const Title = () =>{
    return (
      <p className={styles.nfcTitle}>
         {
           <strong>{user.name}</strong> 
         }
         {'saved your post in '+ feedInfo.category+' '} 
         <span className={styles.nfcTimeBefore}>
            {getTime(time)}
         </span>
        </p>
    )
  }
    return (
      <div className={styles.notificationTile}>
      <div className={styles.leftColumn}>
        <SingleLeadingImage leadingImage={user.imageUrl}/>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.nfcWrapper}>
          <div className={styles.nfcText}>   
              <Title/>
          </div>
          {
            feedInfo.image != null &&
            <div className={styles.endImage}>
              <img src={feedInfo.image} alt="" className={styles.endImageWrapper}  />
            </div>
            }
        </div>
      </div>
    </div>
    );

}

const InfoTile = (props:{notification: InfoObject}) =>{

  const {leadingImage, info, feedInfo, time} = props.notification;
  const Title = () =>{
    return (
      <p className={styles.nfcTitle}>
          {info}
          <span className={styles.nfcTimeBefore}>
            {getTime(time)}
          </span>
        </p>
    )
  }

  return (
    <div className={styles.notificationTile}>
      <div className={styles.leftColumn}>
        <SingleLeadingImage leadingImage={leadingImage}/>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.nfcWrapper}>
          <div className={styles.nfcText}>   
              <Title/>
          </div>
          {
            feedInfo.image != null &&
            <div className={styles.endImage}>
              <img src={feedInfo.image} alt="" className={styles.endImageWrapper}  />
            </div>
          }
        </div>
      </div>
    </div>
  );

}

const NotificationTile = (props: {notification: NtfEntity}) => {
    let displayTile : JSX.Element =  <div>error</div>;
    switch (props.notification.type) {
        case NtfType.LIKED:
            displayTile = <LikedTile notification={props.notification.content as LikedObject}/>;
            break;
        case NtfType.COMMENT:
            displayTile = <CommentTile notification={props.notification.content as CommentObject}/>;
            break;
        case NtfType.SAVED:
            displayTile = <SavedTile notification={props.notification.content as SavedObject}/>;
            break;
        case NtfType.INFO:
            displayTile = <InfoTile notification={props.notification.content as InfoObject}/>;
            break;
        default:
            break;
    }

    return displayTile;
    
}
  

  const PostPreviewBuilder = (props: any) => {
    const { postPreview } = props
    return (
      <div className={styles.postPreview}>
        <img src={postPreview.leadingImage} alt="postPreview"/>
        <div className={styles.descriptionWrapper}>
          <p>{postPreview.description}</p>
        </div>
  
      </div>
    )
  }


export default NotificationTile


