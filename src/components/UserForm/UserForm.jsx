import React, { useState } from 'react';
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

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleAvatarUpload = event => {
    setFieldValue('avatar', event.currentTarget.files[0]);

    const file = event.currentTarget.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleDatePickerChange = date => {
    setFieldValue('birthday', date || user.birthday);
  };

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
                onChange={date => handleDatePickerChange(date)}
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
          Save changes
        </Button>
      </FormContainer>
    </Container>
  );
};

export default UserForm;
