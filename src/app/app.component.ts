import { Todo } from './models/todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my page';
  todos:any[]=[];
  inputTodo:string;
  addTask(todo:string){
  this.todos.push({id:this.todos.length, name:todo})
  this.inputTodo='';
  }
  removeTask(id:number){
    this.todos=this.todos.filter((data,i)=>id!==i)
  }
  editTask(id:number){
    let edit=this.todos[id].name;
    let edit1=prompt(edit)
    this.todos[id].name=edit1;
  }
  doneTask(id:number){
   
  }
}
