import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateUserInfo } from '../../redux/auth/operations';
import moment from 'moment/moment';
import { validationSchema } from './ValidationSchema';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
} from './UserForm.styled';
const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null || user.avatarUrl);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleAvatarUpload = event => {
    setFieldValue('avatar', event.currentTarget.files[0]);
    setIsFormDirty(true);
    const file = event.currentTarget.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleDatePickerChange = date => {
    if (!date) setFieldValue('birthday', '');
    const formattedDate = moment(date.$d).format('DD/MM/YYYY');
    setFieldValue('birthday', formattedDate);
    setIsFormDirty(true);
  };
  const formatPhoneNumber = value => {
    const phoneNumber = value.replace(/[^\d]/g, ''); // Видаляємо всі нецифрові символи
    const countryCode = phoneNumber.slice(0, 2);
    const areaCode = phoneNumber.slice(2, 5);
    const firstPart = phoneNumber.slice(5, 8);
    const secondPart = phoneNumber.slice(8, 10);
    const thirdPart = phoneNumber.slice(10, 12);
    let formattedPhoneNumber = countryCode;
    if (areaCode) {
      formattedPhoneNumber += ` (${areaCode})`;
    }
    if (firstPart) {
      formattedPhoneNumber += ` ${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += ` ${secondPart}`;
    }
    if (thirdPart) {
      formattedPhoneNumber += ` ${thirdPart}`;
    }
    return formattedPhoneNumber.trim(); // Видаляємо зайві пробіли з початку та кінця рядка
  };

  const handlePhoneNumberChange = event => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setFieldValue('phone', formattedPhoneNumber);
    setIsFormDirty(true);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFieldValue(name, value);
    setIsFormDirty(true);
  };
  const currentDate = moment().format('DD/MM/YYYY');

  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleBlur,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      avatar: null,
      name: user.name,
      email: user.email,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        await dispatch(updateUserInfo(values));
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  useEffect(() => {
    setFieldValue('name', user.name);
    setFieldValue('email', user.email);
    setFieldValue('phone', user.phone);
    setFieldValue('skype', user.skype);
    setFieldValue('birthday', user.birthday);

    setSelectedImage(null || user.avatarUrl);
  }, [user, setFieldValue]);

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
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'InvalidInput' : ''}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </WrapperInput>
          {/*  birthday */}
          <WrapperInput>
            <Label htmlFor="birthday">Birthday</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDataPicker
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
          {/*  email */}
          <WrapperInput>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'InvalidInput' : ''}
            />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </WrapperInput>
          {/*  phone */}
          <WrapperInput>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder=" 38 (097)..."
              inputMode="numeric"
              value={values.phone || ''}
              onChange={handlePhoneNumberChange}
              onBlur={handleBlur}
              className={errors.phone && touched.phone ? 'InvalidInput' : ''}
            />
            {errors.phone && touched.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
          </WrapperInput>
          {/*  skype */}
          <WrapperInput>
            <Label htmlFor="skype">Skype</Label>
            <Input
              placeholder="Add skype number"
              id="skype"
              name="skype"
              value={values.skype || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.skype && touched.skype ? 'InvalidInput' : ''}
            />
            {errors.skype && touched.skype && (
              <ErrorMessage>{errors.skype}</ErrorMessage>
            )}
          </WrapperInput>
        </Wrapper>
        <Button disabled={isSubmitting || !isFormDirty} type="submit">
          {isSubmitting ? 'Submitting...' : 'Save changes'}
        </Button>
      </FormContainer>
    </Container>
  );
};
export default UserForm;
