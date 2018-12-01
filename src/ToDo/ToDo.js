import React, { Component } from 'react';
import './ToDo.css';
import List from './List';
import ListInput from './ListInput';
import TodoItem from './ToDo-model';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todo: new TodoItem(),
            isEdit: false
        };
    }

    addTodo = (todo) => {
        const todos = this.state.todos.slice();
        todos.unshift(todo);
        this.setState({
            todos
        });
    }

    editInput = (todo_item) => {
        const todo = Object.assign(this.state.todo, todo_item);
        let isEdit = true;
        
        this.setState(() => ({
            todo,
            isEdit
        }));
    }

    editTodo = (index, item) => {
        const todos = [...this.state.todos];
        todos[index] = item;

        let todo = new TodoItem();
        let isEdit = false;

        this.setState({
            todos,
            todo,
            isEdit
        });
    }

    deleteTodo = (index) => {
        const todos = this.state.todos.slice();
        todos.splice(index, 1);
        this.setState({
            todos: todos
        });
    }

    render() {
        return (
            <div className="todo-app">
                <div className="title">{this.props.title}</div>
                <ListInput 
                isEdit={this.state.isEdit}
                todo={this.state.todo} 
                addTodo={this.addTodo}
                editTodo={this.editTodo}>
                </ListInput>

                <List
                isEdit={this.state.isEdit}
                deleteTodo={this.deleteTodo} 
                editInput={this.editInput}
                items={this.state.todos}></List>
            </div>
        );
    }
}
