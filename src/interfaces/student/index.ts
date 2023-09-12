import { FeedbackInterface } from 'interfaces/feedback';
import { LessonInterface } from 'interfaces/lesson';
import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  name: string;
  learning_style: string;
  progress_level: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  lesson?: LessonInterface[];
  task?: TaskInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
    lesson?: number;
    task?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  learning_style?: string;
  user_id?: string;
}
