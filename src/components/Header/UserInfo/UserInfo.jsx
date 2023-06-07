import { HeaderUserInfoSection, HeaderUserName, HeaderUserPhoto } from './UserInfo.style';
import userPhoto from '../image/Sample_User_Icon.png';

const UserInfo = () => {
    return (
        <HeaderUserInfoSection>
            <HeaderUserName>UserName</HeaderUserName>
            <HeaderUserPhoto src={userPhoto} alt="user"></HeaderUserPhoto>  
        </HeaderUserInfoSection>
    )
};

export default UserInfo;
