import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import { ContactFormSchema } from '../../utils/schemas';
import { addContact } from '../../redux/contacts/operations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage
              className={css.message}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field type="text" name="number" />
            <ErrorMessage
              className={css.message}
              name="number"
              component="span"
            />
          </label>
          <button className={css.btnSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
