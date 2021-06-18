import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFillterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { Taskstatus } from './task.enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  // @Get()
  // getTask(@Query(ValidationPipe) filterSearch: GetTasksFillterDto): Task[] {
  //   if (Object.keys(filterSearch).length) {
  //     return this.tasksService.getTasksWithFillters(filterSearch);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Patch('/:id/status')
  // updateTask(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: Taskstatus,
  // ): Task {
  //   return this.tasksService.updateStatusTask(id, status);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createUser(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
}
