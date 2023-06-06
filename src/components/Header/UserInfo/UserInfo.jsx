import styles from './UserInfo.module.css';
import userPhoto from '../image/Sample_User_Icon.png';

const UserInfo = () => {
    return (
    <div className={styles.HeaderUserInfoSection}>
        <h3 className={styles.HeaderUserName}>UserName</h3>
        <img className={styles.HeaderUserPhoto} src={userPhoto} alt="user photo"></img>   
    </div>
    )
};

export default UserInfo;
