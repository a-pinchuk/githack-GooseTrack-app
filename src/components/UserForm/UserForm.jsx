import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { updateUserInfo } from '../../redux/auth/operations'; // Импорт вашего thunk
import { selectUser } from 'redux/auth/selectors';
import moment from 'moment/moment';
// import * as Yup from 'yup';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  Container,
  FormContainer,
  StyledAvatar,
  Plus,
  Heading,
  Title,
  AvatarInput,
  Input,
  Wrapper,
  WrapperInput,
  Button,
  Label,
} from './UserForm.styled';

// const validationSchema = Yup.object().shape({
//   avatar: Yup.string().url(),
//   name: Yup.string()
//     .required('Required')
//     .matches(/^\S[\S\s]{0,28}\S$/, 'Name must be between 2 and 16 characters')
//     .test(
//       'name-validation',
//       'Name must be at least 2 characters long',
//       value => {
//         return value && value.replace(/\s/g, '').length >= 2;
//       }
//     ),
//   birthday: Yup.date().default(() => new Date()),
//   email: Yup.string().email('Invalid email').required('Required'),
//   phone: Yup.string()
//     .required('Password is required')
//     .matches(/^\+380\d{2} \d{3} \d{2} \d{2}$/, 'Invalid phone number'),
//   skype: Yup.string().max(16, 'No more than 16 characters'),
// });

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      avatar: null,
      name: user.name,
      email: user.email,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
    },
    onSubmit: (values, { resetForm, isSubmitting }) => {
      const formattedDate = moment(values.birthday).format('DD/MM/YYYY'); // Преобразуйте дату в нужный формат

      const updatedValues = {
        ...values,
        birthday: formattedDate,
      };
      console.log(updatedValues);

      dispatch(updateUserInfo(updatedValues));
      console.log('Form waas submitted');
      resetForm();
    },
  });

  return (
    <Container>
      <FormContainer onSubmit={formik.handleSubmit}>
        <StyledAvatar />
        <Plus />
        <Heading>{user.name}</Heading>
        <Title>User</Title>

        <input
          id="avatar"
          name="avatar"
          type="file"
          onChange={event => {
            formik.setFieldValue('avatar', event.currentTarget.files[0]);
          }}
        />
        <Wrapper>
          <WrapperInput>
            <Label htmlFor="name">User Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="User Name"
              value={formik.values.name || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name ? true : false}
              helperText={
                (formik.touched.name && formik.errors.name) ||
                (formik.values.name.length === 16 ? 'Only 16 symbols' : null)
              }
            />
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="birthday">Birthday</Label>
            {/* <Input
              id="birthday"
              name="birthday"
              type="date"
              value={formik.values.birthday || ''}
              onChange={formik.handleChange}
              error={
                formik.touched.birthday && formik.errors.birthday ? true : false
              }
              helperText={formik.touched.birthday && formik.errors.birthday}
            /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker name="birthday" views={['year', 'month', 'day']} />
              </DemoContainer>
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
              error={formik.touched.email && formik.errors.email ? true : false}
              helperText={formik.touched.email && formik.errors.email}
            />
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder=" 38 (097)..."
              name="phone"
              value={formik.values.phone || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && formik.errors.phone ? true : false}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="skype">Skype</Label>
            <Input
              placeholder="Add skype number"
              id="skype"
              name="skype"
              value={formik.values.skype || ''}
              onChange={formik.handleChange}
              error={formik.touched.skype && formik.errors.skype ? true : false}
              helperText={formik.touched.skype && formik.errors.skype}
            />
          </WrapperInput>
        </Wrapper>
        <Button type="submit">Save changes</Button>
      </FormContainer>
    </Container>
  );
};
export default UserForm;
