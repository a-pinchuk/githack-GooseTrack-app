import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { updateUserInfo } from '../../redux/auth/operations'; // Импорт вашего thunk
import { selectUser } from 'redux/auth/selectors';
import moment from 'moment/moment';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Container,
  FormContainer,
  StyledAvatar,
  Plus,
  AvatarInput,
  StyledInput,
  Button,
  Label,
} from './UserForm.styled';

const schema = Yup.object().shape({
  avatar: Yup.string().url(),
  name: Yup.string()
    .min(2, 'Too short')
    .max(16, 'No more than 16 symbols')
    .required('Required'),
  birthday: Yup.date().default(() => new Date()),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(/^\+380\d{2} \d{7}$/, 'Invalid phone number'),
  skype: Yup.string().max(16, 'No more than 16 symbols'),
});
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
    validationSchema: schema,
    onSubmit: values => {
      const formattedDate = moment(values.birthday).format('DD/MM/YYYY'); // Преобразуйте дату в нужный формат

      const updatedValues = {
        ...values,
        birthday: formattedDate,
      };

      dispatch(updateUserInfo(updatedValues));
    },
  });

  return (
    <Container>
      <FormContainer component="form" onSubmit={formik.handleSubmit}>
        <StyledAvatar />
        <Plus />
        <AvatarInput
          id="avatar"
          name="avatar"
          type="file"
          onChange={event => {
            formik.setFieldValue('avatar', event.currentTarget.files[0]);
          }}
        />
        <Label>User Name</Label>
        <StyledInput
          id="name"
          name="name"
          label="Name"
          placeholder="Skype"
          value={formik.values.name || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name ? true : false}
          helperText={
            (formik.touched.name && formik.errors.name) ||
            (formik.values.name.length === 16 ? 'Only 16 symbols' : null)
          }
        />
        <Label>Birthday</Label>
        <StyledInput
          id="email"
          name="email"
          label="Email"
          value={formik.values.email || ''}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email ? true : false}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* <Label>Birthday</Label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={
              formik.values.birthday ? moment(formik.values.birthday) : moment()
            }
            onChange={value => formik.setFieldValue('birthday', value)}
            renderInput={params => (
              <StyledInput
                {...params}
                id="birthday"
                name="birthday"
                type="date"
                label="Birthday"
                value={
                  formik.values.birthday
                    ? moment(formik.values.birthday)
                    : moment()
                }
                onChange={formik.handleChange}
              />
            )}
          />
        </LocalizationProvider> */}

        <Label>Phone</Label>
        <StyledInput
          id="phone"
          placeholder=" 38 (097)..."
          name="phone"
          value={formik.values.phone || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone ? true : false}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Label>Skype</Label>
        <StyledInput
          placeholder="Skype"
          id="skype"
          name="skype"
          value={formik.values.skype || ''}
          onChange={formik.handleChange}
          error={formik.touched.skype && formik.errors.skype ? true : false}
          helperText={formik.touched.skype && formik.errors.skype}
        />
        <Button type="submit">Save changes</Button>
      </FormContainer>
    </Container>
  );
};
export default UserForm;
