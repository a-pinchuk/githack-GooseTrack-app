import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button/Button';
import { Box } from 'components/Box';

const UserForm = () => {
  const [userName, setuserName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [skype, setSkype] = useState('');
  const dispatch = useDispatch();

  return (
    <Box bg="background">
      <form>
        <label>
          <input type="file" name="avatar" required />
        </label>
        <label>
          User Name
          <input type="text" name="userName" required />
        </label>

        <label>
          Birthday
          <input type="text" name="birthday" required />
        </label>

        <label>
          Email
          <input type="text" name="email" required />
        </label>

        <label>
          Phone
          <input type="text" name="phone" required />
        </label>

        <label>
          Skype
          <input type="text" required />
        </label>

        <Button disabled>Save changes</Button>
      </form>
    </Box>
  );
};

export default UserForm;
