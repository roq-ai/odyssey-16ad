import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  learning_style: yup.string().required(),
  progress_level: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
