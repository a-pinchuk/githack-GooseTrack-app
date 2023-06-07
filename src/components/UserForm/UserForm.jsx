import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { updateUserInfo } from '../../redux/auth/operations'; // Импорт вашего thunk
import { selectUser } from 'redux/auth/selectors';
import moment from 'moment/moment';
import { validationSchema } from './ValidationSchema.js';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {
  Container,
  FormContainer,
  Plus,
  Heading,
  Title,
  Input,
  Wrapper,
  WrapperInput,
  Button,
  Label,
  StyledAvatar,
  AvatarDefault,
  ErrorMessage,
  StyledDataPicker,
} from './UserForm.styled';
import { useEffect, useState } from 'react';

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {}, []);
  const handleAvatarUpload = event => {
    formik.setFieldValue('avatar', event.currentTarget.files[0]);

    const file = event.currentTarget.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl);
      setSelectedImage(imageUrl);
    }
  };
  const handleDatePickerChange = date => {
    formik.setFieldValue('birthday', date || user.birthday);
  };
  const formik = useFormik({
    initialValues: {
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      const formattedDate = moment(values.birthday).format('DD/MM/YYYY');
      const updatedValues = {
        ...values,
        birthday: formattedDate,
      };
      dispatch(updateUserInfo(updatedValues));
      console.log('Form was submitted');
    },
  });
  return (
    <Container>
      <FormContainer onSubmit={formik.handleSubmit}>
        <StyledAvatar>
          {selectedImage ? (
            <img src={selectedImage} alt="Avatar" />
          ) : (
            <AvatarDefault />
          )}
        </StyledAvatar>
        <Label htmlFor="avatar">
          <input
            id="avatar"
            name="avatar"
            type="file"
            // value={formik.values.avatar || ''}
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
          <Plus />
        </Label>

        <Heading>{user.name}</Heading>
        <Title>User</Title>

        <Wrapper>
          <WrapperInput>
            <Label htmlFor="name"></Label>
            User Name
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="User Name"
              value={formik.values.name || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.name && formik.touched.name ? 'InvalidInput' : ''
              }
            />
            {formik.errors.name && formik.touched.name && (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            )}
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="birthday">Birthday</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDataPicker
                onChange={date => handleDatePickerChange(date)}
                // value={formik.values.birthday}
                name="birthday"
                views={['year', 'month', 'day']}
              />
            </LocalizationProvider>
          </WrapperInput>

          <WrapperInput>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email
                  ? 'InvalidInput'
                  : ''
              }
            />
            {formik.errors.email && formik.touched.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder=" 38 (097)..."
              name="phone"
              type="tel"
              value={formik.values.phone || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.phone && formik.touched.phone
                  ? 'InvalidInput'
                  : ''
              }
            />
            {formik.errors.phone && formik.touched.phone && (
              <ErrorMessage>{formik.errors.phone}</ErrorMessage>
            )}
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="skype">Skype</Label>
            <Input
              placeholder="Add skype number"
              id="skype"
              name="skype"
              value={formik.values.skype || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.skype && formik.touched.skype
                  ? 'InvalidInput'
                  : ''
              }
            />
            {formik.errors.skype && formik.touched.skype && (
              <ErrorMessage>{formik.errors.skype}</ErrorMessage>
            )}
          </WrapperInput>
        </Wrapper>
        <Button disabled={formik.isSubmitting} type="submit">
          Save changes
        </Button>
      </FormContainer>
    </Container>
  );
};

export default UserForm;
