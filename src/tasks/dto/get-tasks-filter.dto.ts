import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';
import { Taskstatus } from '../task.model';

export class GetTasksFillterDto {
  @IsOptional()
  @IsIn([Taskstatus.DONE, Taskstatus.IN_PROGRESS, Taskstatus.OPEN])
  status: Taskstatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
