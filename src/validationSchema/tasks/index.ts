import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  student_id: yup.string().nullable().required(),
});
