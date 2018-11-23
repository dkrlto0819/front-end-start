import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
    state = {
        list: [
            {
                id: 1,
                title: '할일할일1'
            },
            {
                id: 2,
                title: '할일할일2'
            }
        ]
    }

    checkTodo=(event)=>{
        console.log(1111);

        const text=this.state.text;
        const list=[...this.state.list];
        list.push({
            id:3,
            title: text
        })

        this.setState({list: text=''});

        event.preventDefault();
    }



    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <input type="text" onChange={this.handleChange} value = {this.state.text}></input>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                                return(
                                    <li key={index}>{item.title}</li>
                                )
                            }
                        )
                    }
                    <li>할일</li>
                    <li>할일</li>
                    <li>할일</li>
                    <li>할일</li>
                </ul>
                {/* <TodoList> */}
            </div>
        );
    }
}

export default Todo;