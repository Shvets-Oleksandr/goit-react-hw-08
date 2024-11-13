import * as yup from 'yup';

export const ContactFormSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Must be at least 2 characters long!')
    .max(50, 'Too Long!')
    .required('Contact name is required'),
  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Phone is required')
    .matches(
      /^[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4}$/,
      'Phone must be XXX-XXX-XXXX'
    ),
});

export const RegistrationFormSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Must be at least 2 characters long!')
    .max(50, 'Too Long!')
    .required('User name is required'),
  email: yup
    .string()
    .email('E-mail format must be "user@example.com"')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(8, 'Password length must be of 8-15 characters!')
    .max(15, 'Too Long!')
    .required('Password is required'),
});

export const LoginFormSchema = yup.object({
  email: yup
    .string()
    .email('E-mail format must be "user@example.com"')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(8, 'Password length must be of 8-15 characters!')
    .max(15, 'Too Long!')
    .required('Password is required'),
});
