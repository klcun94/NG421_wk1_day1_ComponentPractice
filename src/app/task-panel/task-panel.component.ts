import { Component, OnInit } from '@angular/core';
import tasks from '../tasks';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {
  public tasks: any[] = [];
  constructor() { }

  ngOnInit() {
    this.tasks = tasks;
  }
}
