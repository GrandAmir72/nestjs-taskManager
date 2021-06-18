import { Taskstatus } from '../task.model';

export class GetTasksFillterDto {
  status: Taskstatus;
  search: string;
}
