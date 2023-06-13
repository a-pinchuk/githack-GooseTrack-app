import {
  HeaderUserInfoSection,
  HeaderUserName,
  HeaderUserPhoto,
  TextAvatar,
} from './UserInfo.style';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { useEffect, useState } from 'react';

const UserInfo = ({ toogleShowSiderBar }) => {
  const { user } = useAuth();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (!user?.name) {
      setAvatar(null);
    } else {
      setAvatar(user?.name.slice(0, 1).toUpperCase());
    }
  }, [user?.name]);

  return (
    <NavLink
      to="/account"
      style={{ textDecoration: 'none' }}
      onClick={toogleShowSiderBar}
    >
      <HeaderUserInfoSection>
        <HeaderUserName>{user.name}</HeaderUserName>

        {!user?.avatarUrl ? (
          <TextAvatar>{avatar}</TextAvatar>
        ) : (
          <HeaderUserPhoto
            src={user?.avatarUrl}
            alt="avator"
            width="28"
            height="28"
          />
        )}
      </HeaderUserInfoSection>
    </NavLink>
  );
};

export default UserInfo;
