import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import { LoginFormSchema } from '../../utils/schemas';
import { loginUser } from '../../redux/auth/operations';

import css from '../LoginForm/LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>E-mail</span>
            <Field type="text" name="email" />
            <ErrorMessage
              className={css.message}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password</span>
            <Field type="password" name="password" />
            <ErrorMessage
              className={css.message}
              name="password"
              component="span"
            />
          </label>
          <button className={css.btnSubmit} type="submit">
            Sign Ip
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
