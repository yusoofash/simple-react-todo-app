import React, { Component } from 'react';
import './ToDo.css';
import List from './List';
import ListInput from './ListInput';
import TodoItem from './ToDo-model';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                new TodoItem('Hello world!'),
            ],
            todo: new TodoItem(),
            isEdit: false
        };
    }

    addTodo = (task) => {
        const todos = this.state.todos.slice();
        todos.unshift(new TodoItem(task));
        this.setState({
            todos
        });
    }


    deleteTodo = (index) => {
        const todos = this.state.todos.slice();
        todos.splice(index, 1);
        this.setState({
            todos
        });
    }

    editTodo = (index, task) => {
        const { todos } = this.state;
        todos[index] = new TodoItem(task);
        this.setState({
            todos
        });
    }

    todo_list_items = () => {
        return this.state.todos.map((todo, index) => (
            <List
                key={index}
                id={index}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
                item={todo}></List>
        ));
    }

    render() {

        let list_items = this.state.todos.map((todo, index) => (
            <List
                key={index}
                id={index}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
                item={todo}></List>
        ));
        let todo_list;

        if (this.state.todos.length > 0) {

            todo_list = (
                <ul>
                    {list_items}
                </ul>
            )
        } else {
            todo_list = (
                <div></div>
            )
        }

        return (
            <div className="todo-app">
                <div className="title">{this.props.title}</div>
                <ListInput
                    addTodo={this.addTodo}
                ></ListInput>

                {todo_list}
            </div>
        );
    }
}
