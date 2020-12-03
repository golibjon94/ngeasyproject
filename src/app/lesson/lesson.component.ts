import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Angular asoslari';
  price = 50.0;
  duration = 20;
  intakeDeadline = new Date(2020, 11, 30);

}
