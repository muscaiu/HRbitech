import { Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseObjectObservable ,FirebaseListObservable } from 'angularfire2';

@Component({
    template: `
<h2>ToDo</h2>

<input 
        #newTodo
        [(ngModel)]="todoinput" 
        placeholder="add ToDo" 
        (keyup.enter)="addTodo(newTodo.value)"
        type="text" 
/>  
{{ todoinput }}
<br>
{{ item | async | json }}

<div *ngFor="let todo of todos | async">
    {{todo.todo}}
    <button (click)="deleteTodo(todo.$key)">Delete</button>
    <button (click)="finishedTodo(todo.$key)">Finished</button>
</div>   
  
    `,
    selector: 'todo'
})

export class ToDoComponent implements OnInit{
    item: FirebaseObjectObservable<any>;
    todos: FirebaseListObservable<any>;

    constructor(private _af: AngularFire) {
    }

    ngOnInit(){
        this.todos = this._af.database.list('hr/todos');
        this.item = this._af.database.object('/hr/todos/1');
        //console.log(this.item.map(x=>this.item = x))
        // .subscribe(
        //   x => this.items = x,
        //   this.loadingLista = false
        // )
    }

    addTodo(newTodo: string){
        this.todos.push({
            todo: newTodo
        } )
    }

    deleteTodo(key: string){
        if(confirm("U sure u want to delete " + key + " ?")){
            this.todos.remove(key)
        }
    }

    finishedTodo(key: string, finished: boolean){
        this.todos.update(key,{finished: true})
    }
}


//     <li>Customize Auth0 login window</li>
//     <li>Change login from email to username</li>
//     <li>Add upload file button</li>
//     <li>Change Date field to Date type</li>
//     <li>Add custom date range search</li>
//     <li>Stop spinner</li>
//     <li>Implement dirty checking</li>
//     <li>Refresh the page on Logout</li>
//     <li>Add search box</li>
//     <li>Add sorting</li>
//     <li>Try use _underscore to filter and search data</li>