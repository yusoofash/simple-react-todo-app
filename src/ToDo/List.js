import React, { Component } from 'react';


export default class List extends Component {
    state = {
        is_edit: false,
        input: this.props.item.task
    }

    editTodo() {
        this.setState(() => ({
            is_edit: !this.state.is_edit
        }));
    }

    componentDidUpdate(prevProp) {
        if (prevProp.item.task !== this.props.item.task) {
            this.setState({
                input: this.props.item.task
            });
        }
    }

    inputChangeHandler(e) {
        const input = e.target.value;
        this.setState({
            input
        })
        const {editTodo, id} = this.props;
        editTodo(id, this.state.input);
    }

    deleteItem(id) {
        this.props.deleteTodo(id);
    }

    render() {
        let task;
        
        if (this.state.is_edit) {
            task = <input type="text" value={this.state.input} onChange={(e)=>this.inputChangeHandler(e)} />
        } else {
            task = <span>{this.props.item.task}</span>
        }
        return (
            <li>
                {task}
                <div className="list-icons">
                    <i className="fas text-info cursor-pointer fa-pencil-alt" onClick={() => this.editTodo()}></i>
                    <i className="fas text-danger cursor-pointer fa-trash" 
                    onClick={() => this.deleteItem(this.props.id)}></i>
                </div>
            </li>
        )

    }
}