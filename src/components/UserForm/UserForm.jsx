import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';
import { updateUserInfo } from '../../redux/auth/operations'; // Импорт вашего thunk
import moment from 'moment/moment';

const UserForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      avatar: null,
      name: '',
      email: '',
      phone: '',
      skype: '',
      birthday: '',
    },
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
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Typography variant="h4">Update User Info</Typography>
      <input
        id="avatar"
        name="avatar"
        type="file"
        onChange={event => {
          formik.setFieldValue('avatar', event.currentTarget.files[0]);
        }}
      />
      <TextField
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextField
        id="phone"
        name="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <TextField
        id="skype"
        name="skype"
        label="Skype"
        value={formik.values.skype}
        onChange={formik.handleChange}
      />
      <TextField
        id="birthday"
        name="birthday"
        type="date"
        label="Birthday"
        value={formik.values.birthday}
        onChange={formik.handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default UserForm;
