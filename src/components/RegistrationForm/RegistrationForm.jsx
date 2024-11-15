import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import { RegistrationFormSchema } from '../../utils/schemas';
import { registerUser } from '../../redux/auth/operations';

import css from '../RegistrationForm/RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegistrationFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>User name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage
              className={css.message}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>E-mail</span>
            <Field className={css.input} type="text" name="email" />
            <ErrorMessage
              className={css.message}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password</span>
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.message}
              name="password"
              component="span"
            />
          </label>
          <button className={css.btnSubmit} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
