import * as Yup from 'yup';
const regexName = /^\S[\S\s]{0,28}\S$/;
const regexPhone = /^380\d{9}$/;

export const validationSchema = Yup.object().shape({
  // avatar: Yup.string().url(),
  name: Yup.string()
    .required('Name is required')
    .matches(regexName, 'Name must be between 2 and 16 characters')
    .test(
      'name-validation',
      'Name must be at least 2 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 2;
      }
    ),
  birthday: Yup.string(),
  //   .matches(
  //   /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   'Invalid date format. Please use DD/MM/YYYY format.'
  // ),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(regexPhone, {
    message: 'Invalid phone number',
  }),
  skype: Yup.string()
    .max(16, 'No more than 16 characters')
    .test(
      'skype-validation',
      'Invalid skype',
      value => value === null || value === '' || value.length <= 16
    ),
});
