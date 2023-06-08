import { HeaderUserInfoSection, HeaderUserName, HeaderUserPhoto, TextAvatar, AvatorTaskList } from './UserInfo.style';
import userPhoto from '../image/Sample_User_Icon.png';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
    const user = useSelector(selectUser);

    const avaFunc = value => {
        if (!value) {
          return;
        } else {
          return value.slice(0, 1).toUpperCase();
        }
    };

    return (
        <HeaderUserInfoSection>
            <HeaderUserName>{user.name}</HeaderUserName>

            {!user?.avatarUrl ? (
                <TextAvatar>{avaFunc(user?.name)}</TextAvatar>
            ) : (
                <HeaderUserPhoto
                   src={user?.avatarUrl}
                   alt="avator"
                   width="28"
                   height="28"
                />
            )}
        </HeaderUserInfoSection>
    )
};

export default UserInfo;
