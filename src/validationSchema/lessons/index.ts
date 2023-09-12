import * as yup from 'yup';

export const lessonValidationSchema = yup.object().shape({
  name: yup.string().required(),
  difficulty_level: yup.number().integer().required(),
  student_id: yup.string().nullable().required(),
});
