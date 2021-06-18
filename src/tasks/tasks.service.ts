import { Injectable, NotFoundException } from '@nestjs/common';
import { Taskstatus } from './task.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksModule } from './tasks.module';
import { GetTasksFillterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`this id: "${id}" not found!`);
    }
    return found;
  }
  // getTasksWithFillters(fillterTasks: GetTasksFillterDto): Task[] {
  //   const { status, search } = fillterTasks;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }
  // deleteTask(id: string): void {
  //   const found = this.getTask(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: Taskstatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateStatusTask(id: string, newStatus: Taskstatus): Task {
  //   const task = this.getTask(id);
  //   task.status = newStatus;
  //   return task;
  // }
}
