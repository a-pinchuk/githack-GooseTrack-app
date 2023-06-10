import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateUserInfo } from '../../redux/auth/operations'; // Импорт вашего thunk
import moment from 'moment/moment';
import { validationSchema } from './ValidationSchema';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useAuth } from 'hooks';
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
  StyledInputMask,
} from './UserForm.styled';

const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log('🚀 ~ user:', user);

  const [selectedImage, setSelectedImage] = useState(null || user.avatarUrl);

  const handleAvatarUpload = event => {
    setFieldValue('avatar', event.currentTarget.files[0]);

    const file = event.currentTarget.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleDatePickerChange = date => {
    if (!date) setFieldValue('birthday', '');
    console.log(date.$d);
    const formattedDate = moment(date.$d).format('DD/MM/YYYY');
    setFieldValue('birthday', formattedDate);
  };

  const currentDate = dayjs().format('DD/MM/YYYY');

  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      avatar: null,
      name: user.name,
      email: user.email || '',
      phone: user.phone || '',
      skype: user.skype || '',
      birthday: user.birthday || '',
    },
    // validationSchema: validationSchema,

    onSubmit: async values => {
      try {
        console.log(values);
        await dispatch(updateUserInfo(values));
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
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
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
            accept="image/png, image/jpeg"
          />
          <Plus />
        </Label>

        <Heading>{user.name}</Heading>
        <Title>User</Title>

        <Wrapper>
          <WrapperInput>
            <Label htmlFor="name">User Name</Label>

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="User Name"
              value={values.name || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'InvalidInput' : ''}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="birthday">Birthday</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDataPicker
                // defaultValue={dateValue}
                slotProps={{
                  textField: {
                    placeholder: `${currentDate}`,
                  },
                }}
                onChange={handleDatePickerChange}
                name="birthday"
                views={['year', 'month', 'day']}
                format="DD/MM/YYYY"
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
              value={values.email || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'InvalidInput' : ''}
            />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </WrapperInput>

          <WrapperInput>
            <Label htmlFor="phone">Phone</Label>
            <StyledInputMask
              mask="99 (999) 999 99 99"
              id="phone"
              placeholder=" 38 (097)..."
              name="phone"
              type="tel"
              inputMode="numeric"
              value={values.phone || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.phone && touched.phone ? 'InvalidInput' : ''}
            />

            {errors.phone && touched.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="skype">Skype</Label>
            <Input
              placeholder="Add skype number"
              id="skype"
              name="skype"
              value={values.skype || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.skype && touched.skype ? 'InvalidInput' : ''}
            />
            {errors.skype && touched.skype && (
              <ErrorMessage>{errors.skype}</ErrorMessage>
            )}
          </WrapperInput>
        </Wrapper>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submitting...' : 'Save changes'}
        </Button>
      </FormContainer>
    </Container>
  );
};

export default UserForm;
