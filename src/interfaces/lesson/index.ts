import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface LessonInterface {
  id?: string;
  name: string;
  difficulty_level: number;
  student_id: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  _count?: {};
}

export interface LessonGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  student_id?: string;
}
