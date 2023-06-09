import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { updateUserInfo } from '../../redux/auth/operations'; // Импорт вашего thunk
import { selectUser } from 'redux/auth/selectors';
import moment from 'moment/moment';
import { validationSchema } from './ValidationSchema.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
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

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
    console.log('date', date.$d);
    const formattedDate = moment(date.$d).format('DD/MM/YYYY');
    console.log('formattedDate', formattedDate);
    setFieldValue('birthday', formattedDate);
  };

  const dateValue =
    user.birthday instanceof Date
      ? dayjs(user.birthday) // Преобразуем дату в объект Dayjs
      : dayjs(user.birthday, 'DD/MM/YYYY'); // Если user.birthday - строка в формате 'DD/MM/YYYY'

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
      avatar: user.avatarUrl,
      name: user.name,
      email: user.email,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      try {
        console.log(values);
        // const formattedDate = moment(values.birthday).format('DD/MM/YYYY');

        // const updatedValues = {
        //   ...values,
        //   birthday: formattedDate,
        // };

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
                defaultValue={dateValue || dayjs()}
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
            <Input
              id="phone"
              placeholder=" 38 (097)..."
              name="phone"
              type="tel"
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
