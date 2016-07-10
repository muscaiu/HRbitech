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

<div *ngFor="let todo of todos | async">

    <span> {{todo.todo}} </span>

    <button (click)="deleteTodo(todo.$key)">Delete</button>
    <button (click)="finishedTodo(todo.$key)">Finished</button>
</div>   
    `
})

export class ToDoComponent implements OnInit{
    todos: FirebaseListObservable<any>;
    
    constructor(private _af: AngularFire) {
    }

    ngOnInit(){
        this.todos = this._af.database.list('hr/todos');
        //this.finished = this._af.database.object('/hr/todos/1');
        //this.finished = JSON.stringify(this.finished).
        
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

    finishedTodo(key: string, finished: boolean, isFinished: boolean){
       
        var snapshotFinished = this._af.database.object('hr/todos/'+ key,{ preserveSnapshot: true})

        snapshotFinished.subscribe(snapshot => {          
            isFinished = snapshot.val().finished;  
        });

        if (isFinished == false || isFinished == null){
            this.todos.update(key,{finished: true});
            isFinished = true;
            console.log(isFinished);
        }    
        else{
            this.todos.update(key,{finished: false});
            isFinished = false;
            console.log(isFinished);
        }
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