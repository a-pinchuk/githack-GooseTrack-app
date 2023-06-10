import * as Yup from 'yup';
const regexName = /^\S[\S\s]{0,28}\S$/;
const regexPhone = /^38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;

export const validationSchema = Yup.object().shape({
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
  birthday: Yup.string().notRequired(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(regexPhone, {
      message: 'Invalid phone number',
    })
    .notRequired(),
  skype: Yup.string()
    .max(16, 'No more than 16 characters')
    .nullable()
    .notRequired(),
});
