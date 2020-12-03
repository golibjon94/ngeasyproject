import { Component } from '@angular/core';
import { LessonService } from './lessons.service';
@Component({
    selector: 'lessons',
    template: `
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    <h1>{{ getTitle() }}</h1>
    <input type="text" [(ngModel)] = "userName" >
    <p>{{ userName }}</p>
    <button [style.backgroundColor]="isActive ? 'orange' : 'red'" (click)="onTestButtonClicked()">Reset</button>
    <ul>
        <li *ngFor="let lesson of lessons">
            {{ lesson }}
        </li>
    </ul>

    <app-lesson></app-lesson>

    <img src="{{ logoUrl }}"/>
    <img [src]="logoUrl"/>
    `
})
export class LessonComponent {

    colSpan: number = 2;
    title = 'Darslar ro\'yhati';
    lessons: string[];
    logoUrl = 'https://source.unsplash.com/random';
    userName = '';

    constructor(lessonSvc: LessonService) {

        this.lessons = lessonSvc.getLessons();
    }

    onTextInput(event: Event) {
        this.userName = 'event.target.value';
        console.log(event);
    }

    onTestButtonClicked() {
        console.log('Tugma bosildi.');
        this.userName = '';
    }

    getTitle(): string {
        return 'Sarlavha: ' + this.title;
    }


}
