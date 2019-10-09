import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { TextField, Button, Typography } from '@material-ui/core';
import { fakeAuth } from '../../auth/fake-auth';

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

function Login({ history, location }) {
  const classes = useStyles();

  const { from } = location.state || { from: { pathname: '/' } };

  console.log('location', from.pathname);

  if (fakeAuth.isAuthenticated === true) {
    return <Redirect to={from} />;
  }

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
              .matches(
                /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{10,64})/,
                'Must contain atleast one special characters, one number, one uppercase and lowercase letter'
              )
          })}
          onSubmit={(values, formikActions) => {
            console.log('Form submitted');
            console.dir(values);
            fakeAuth.authenticate(() => 1);
            formikActions.setSubmitting(false);
            history.push(from);
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
                {errors.email && touched.email && <small style={{ color: 'red' }}>{errors.email}</small>}
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
                {errors.password && touched.password && <small style={{ color: 'red' }}>{errors.password}</small>}
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

export default withRouter(Login);
