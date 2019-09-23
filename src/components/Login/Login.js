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
    justifyContent: 'center'
  },
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main
  },
  loginPage: {
    padding: 30,
    backgroundColor: 'white'
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  stretchInput: {
    width: '100%'
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    //   Here clsx package is used to merge two classes
    <div className={clsx({ [classes.container]: true, [classes.main]: true })}>
      <div className={classes.loginPage}>
        <Typography variant="h4">LOGIN</Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
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
              touched,
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
                  onBlur={handleBlur}
                  error={errors.email && touched.email ? true : false}
                  className={classes.stretchInput}
                />
                {errors.email && touched.email && <small>{errors.email}</small>}
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password ? true : false}
                  className={classes.stretchInput}
                />
                {errors.password && touched.password && <small>{errors.password}</small>}
                <div className={classes.buttonContainer}>
                  <Button variant="outlined" color="primary" onClick={handleReset} disabled={!dirty || isSubmitting}>
                    RESET
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                  >
                    LOGIN
                  </Button>
                </div>
                <br />
                <pre>
                  <strong>props</strong> = {JSON.stringify(props, null, 2)}
                </pre>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
