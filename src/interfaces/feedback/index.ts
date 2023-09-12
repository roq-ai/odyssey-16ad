import { StudentInterface } from 'interfaces/student';
import { GuardianInterface } from 'interfaces/guardian';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  student_id: string;
  guardian_id: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  guardian?: GuardianInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  student_id?: string;
  guardian_id?: string;
}
