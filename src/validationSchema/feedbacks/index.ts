import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  content: yup.string().required(),
  student_id: yup.string().nullable().required(),
  guardian_id: yup.string().nullable().required(),
});
