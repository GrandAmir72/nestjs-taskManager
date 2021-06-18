import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';
import { Taskstatus } from '../task.enum';

export class GetTasksFillterDto {
  @IsOptional()
  @IsIn([Taskstatus.DONE, Taskstatus.IN_PROGRESS, Taskstatus.OPEN])
  status: Taskstatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
