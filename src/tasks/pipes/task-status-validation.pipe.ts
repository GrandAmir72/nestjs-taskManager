import { BadRequestException, PipeTransform } from '@nestjs/common';
import { Taskstatus } from '../task.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allloweStatus = [
    Taskstatus.OPEN,
    Taskstatus.IN_PROGRESS,
    Taskstatus.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`this ${value} is not exist!`);
    }
    return value;
  }
  private isStatusValid(status: any) {
    const idx = this.allloweStatus.indexOf(status);
    return idx !== -1;
  }
}
