import React, {Component, Fragment} from 'react'
import TodoItem from "./TodoItem"
import Test from "../Test"
class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleBtnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    
    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }



    handleDelete(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

    getTodoItems(){
        return(
            this.state.list.map((item, index) => {
                return <TodoItem delete={this.handleDelete} content={item} key={index} index={index}/>
                // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })
        )
    }


    //父组件通过属性的形式向子组件传递参数
    //子组件通过props接受父组件传递过来的参数
    render(){
        return (
            <Fragment>
                <div>
                    <input value = {this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className='red-btn' onClick={this.handleBtnClick}>
                        add
                    </button>
                </div>
                <ul>
                    {
                        this.getTodoItems()
                    }
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }





}

export default TodoList;