import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from './FormReception.styled';
import CustomInput from '../CustomInput/CustomInput';

export const FormReception = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      time: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      number: Yup.string().min(7).max(20).required('Required'),
    }),
    onSubmit: () => {
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <CustomInput formik={formik} />
      <button className="buttonSubmit" type="submit">
        Send
      </button>
    </Form>
  );
};
