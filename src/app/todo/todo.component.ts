import {Component} from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';
//import * as _ from 'underscore';

@Component({
    template: `
<h2>ToDo</h2>

<form #f="ngForm">
    <input placeholder="name" ngControl="name"/>
</form>

<button (click)="postTodo(f.value)">Post</button>
<div *ngFor="let todo of todos | async">
    {{todo.name}}
</div>   
<ul>
    <li>Customize Auth0 login window</li>
    <li>Change login from email to username</li>
    <li>Add upload file button</li>
    <li>Change Date field to Date type</li>
    <li>Add custom date range search</li>
    <li>Stop spinner</li>
    <li>Implement dirty checking</li>
    <li>Refresh the page on Logout</li>
    <li>Add search box</li>
    <li>Add sorting</li>
    <li>Try use _underscore to filter and search data</li>
</ul>    
    `,
    selector: 'todo'
})
export class ToDoComponent{
    todos: FirebaseListObservable<any>;
    
    contructor(af : AngularFire){
        this.todos = af.database.list('hr/todos');
        console.log(_);
    }
}