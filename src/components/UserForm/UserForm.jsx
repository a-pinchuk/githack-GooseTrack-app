import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import { format } from 'date-fns';
import { ErrorText } from './UserForm.styled';
import { Box } from 'components/Box';

const UserForm = () => {
  // const [status, setStatus] = useState('');
  // const dispatch = useDispatch();

  const dateOfBirthday = new Date(2014, 0, 11);
  const formattedDate = format(dateOfBirthday, 'yyyy-MM-dd');
  console.log(formattedDate);

  const initialValues = {
    avatar: '',
    userName: '',
    birthday: '',
    email: '',
    phone: '',
    skype: '',
  };

  const schema = object({
    userName: string()
      .min(2, 'To short')
      .max(16, 'To long')
      .required('Required'),
    birthday: date().default(() => new Date()),
    email: string().email('Not valid email').required('Required'),
    phone: number('Phone must be a number'),
    skype: string(),
  });
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log('handleSubmit');
    resetForm();
  };
  return (
    <Box bg="background" display="flex" flexDirection="column" px={4} mt={4}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="file" name="avatar" placeholder="" />
          <label>
            User Name
            <Field type="text" name="userName" placeholder="User Name" />
            <FormError name="userName" component="div" />
          </label>
          <br />
          <label>
            Birthday
            <Field type="date" name="birthday" />
            <FormError name="birthday" component="div" />
          </label>
          <br />
          <label>
            Email
            <Field type="email" name="email" />
            <FormError name="email" component="div" />
          </label>
          <br />
          <label>
            Phone
            <Field type="tel" name="phone" />
            <FormError name="phone" component="div" />
          </label>
          <br />
          <label>
            Skype
            <Field type="text" name="skype" placeholder="Add a skype number" />
            <FormError name="skype" component="div" />
          </label>
          <br />
          <button type="submit">Save changes</button>
        </Form>
      </Formik>
    </Box>
  );
};

export default UserForm;
