import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/TaskService/task.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
    public daysTask: any;
    public colors = ['gray', 'grey', 'blue', 'yellow', 'orange', 'red', 'purple', 'navy', 'turquoise', 'green'];

    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.daysTask = this.taskService.getWeekTask();
    }

}
