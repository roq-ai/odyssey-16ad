import { FeedbackInterface } from 'interfaces/feedback';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GuardianInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  feedback?: FeedbackInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
  };
}

export interface GuardianGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
