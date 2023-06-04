// import React from 'react';
// import { useFormik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { format } from 'date-fns';
// import { ErrorText, StyledInput, PictureBox } from './UserForm.styled';

// const ExampleForm = () => {
//   const dateOfBirthday = new Date(2014, 0, 11);
//   const formattedDate = format(dateOfBirthday, 'yyyy-MM-dd');
//   console.log(formattedDate);

//   const schema = Yup.object().shape({
//     avatar: Yup.string().url(),
//     userName: Yup.string()
//       .min(2, 'To short')
//       .max(16, 'No more then 16 symbols')
//       .test('is-valid-username', 'Invalid username length', value => {
//         if (value && value.length === 2) {
//           throw new Yup.ValidationError('To short');
//         }
//         if (value && value.length === 17) {
//           throw new Yup.ValidationError('No more than 16 symbols');
//         }
//         return true;
//       })
//       .required('Required'),
//     birthday: Yup.date().default(() => new Date()),
//     email: Yup.string().email('Invalid email').required('Required'),
//     phone: Yup.string().matches(/^\+380\d{2} \d{7}$/, 'Invalid phone number'),
//     skype: Yup.string()
//       .max(16, 'No more then 16 symbols')
//       .test('is-skype-url', value => {
//         if (value && value.length === 17) {
//           return false;
//         }
//         return true;
//       }),
//   });

//   const FormError = ({ name }) => {
//     return (
//       <ErrorMessage
//         name={name}
//         render={message => <ErrorText>{message}</ErrorText>}
//       />
//     );
//   };
//   const formik = useFormik({
//     initialValues: {
//       avatar: '',
//       userName: '',
//       birthday: '',
//       email: '',
//       phone: '',
//       skype: '',
//     },
//     validationSchema: { schema },
//     onSubmit: (values, { resetForm }) => {
//       alert(JSON.stringify(values, null, 2));
//       resetForm();
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <PictureBox></PictureBox>
//       <StyledInput
//         id="avatar"
//         name="avatar"
//         type="file"
//         onChange={formik.handleChange}
//         value={formik.values.avatar}
//       />
//       <label htmlFor="userName">
//         User Name
//         <input
//           id="userName"
//           name="userName"
//           type="text"
//           placeholder="User Name"
//           onChange={formik.handleChange}
//           value={formik.values.userName}
//         />
//         <FormError name="userName" component="div" />
//       </label>

//       <label htmlFor="birthday">
//         Birthday
//         <input
//           id="birthday"
//           name="birthday"
//           type="date"
//           onChange={formik.handleChange}
//           value={formik.values.birthday}
//         />
//         <FormError name="birthday" component="div" />
//       </label>

//       <label htmlFor="email">
//         Email
//         <input
//           id="email"
//           name="email"
//           type="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         <FormError name="email" component="div" />
//       </label>

//       <label htmlFor="phone">
//         Phone
//         <input
//           id="phone"
//           name="phone"
//           type="tel"
//           placeholder="+380..."
//           onChange={formik.handleChange}
//           value={formik.values.phone}
//         />
//         <FormError name="phone" component="div" />
//       </label>

//       <label htmlFor="skype">
//         Skype
//         <input
//           id="skype"
//           name="skype"
//           type="text"
//           placeholder="Add a skype number"
//           onChange={formik.handleChange}
//           value={formik.values.skype}
//         />
//         <FormError name="phone" component="div" />
//       </label>

//       <button type="submit">Save changes</button>
//     </form>
//   );
// };

// export default ExampleForm;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';
import { StyledInput, PictureBox } from './UserForm.styled';

const ExampleForm = () => {
  const dateOfBirthday = new Date(2014, 0, 11);
  const formattedDate = format(dateOfBirthday, 'yyyy-MM-dd');
  console.log(formattedDate);
  const schema = Yup.object().shape({
    avatar: Yup.string().url(),
    userName: Yup.string()
      .min(2, 'To short')
      .max(16, 'No more then 16 symbols')
      .test('is-valid-username', 'Invalid username length', value => {
        if (value && value.length === 2) {
          throw new Yup.ValidationError('To short');
        }
        if (value && value.length === 17) {
          throw new Yup.ValidationError('No more than 16 symbols');
        }
        return true;
      })
      .required('Required'),
    birthday: Yup.date().default(() => new Date()),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().matches(/^\+380\d{2} \d{7}$/, 'Invalid phone number'),
    skype: Yup.string()
      .max(16, 'No more then 16 symbols')
      .test('is-skype-url', value => {
        if (value && value.length === 17) {
          return false;
        }
        return true;
      }),
  });

  const formik = useFormik({
    initialValues: {
      avatar: '',
      userName: '',
      birthday: '',
      email: '',
      phone: '',
      skype: '',
    },
    validateSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert('The Form was submitted');
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <PictureBox></PictureBox>
      <StyledInput
        id="avatar"
        name="avatar"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.avatar}
      />
      <br />
      <label htmlFor="userName"></label>
      User Name
      <input
        id="userName"
        name="userName"
        type="text"
        placeholder="User Name"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />
      <br />
      <label htmlFor="birthday"></label>
      Birthday
      <input
        id="birthday"
        name="birthday"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthday}
      />
      <br />
      <label htmlFor="email"></label>
      Email
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <label htmlFor="phone"></label>
      Phone
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="+380..."
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <br />
      <label htmlFor="skype"></label>
      Skype
      <input
        id="skype"
        name="skype"
        type="text"
        placeholder="Add a skype number"
        onChange={formik.handleChange}
        value={formik.values.skype}
      />
      <br />
      <button type="submit">Save changes</button>
    </form>
  );
};

export default ExampleForm;
