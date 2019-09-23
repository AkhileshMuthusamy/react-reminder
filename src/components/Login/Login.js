import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { TextField, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main
  },
  controls: {
    width: '100%',
    height: '100%'
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    //   Here clsx package is used to merge two classes
    <div className={clsx({ [classes.container]: true, [classes.controls]: true })}>
      <Typography variant="h4">LOGIN</Typography>
      <Formik
        initialValues={{ email: 'Ak@Ak.com', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Email cannot be empty'),
          password: Yup.string()
            .required('Password Required')
            .min(10, 'Must be more than 10 characters')
        })}
        onSubmit={(values, formikActions) => {
          console.log('Form submitted');
          console.dir(values);
          formikActions.setSubmitting(false);
        }}
      >
        {props => {
          const {
            values,
            handleChange,
            handleReset,
            handleBlur,
            handleSubmit,
            errors,
            dirty,
            isSubmitting,
            isValid
          } = props;
          return (
            <form className={classes.container}>
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                margin="normal"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <div>{errors.email}</div>}
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                margin="normal"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={false}
              />
              {errors.password && <div>{errors.password}</div>}
              <Button variant="outlined" onClick={handleReset} disabled={!dirty || isSubmitting}>
                RESET
              </Button>
              <Button variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>
                LOGIN
              </Button>
              <br />
              <pre>
                <strong>props</strong> = {JSON.stringify(props, null, 2)}
              </pre>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
