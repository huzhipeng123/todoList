import React, { Component } from "react";
import PropTypes from 'prop-types'

class TodoItem extends Component{

    //子组件如果想和父组件通信，要调用父组件传递过来的方法

    
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        // console.log(this.props.index);
        this.props.delete(this.props.index);
    }

    render() {
        const {content, test} = this.props;
        return (
            <li onClick={this.handleDelete}>{test}-{content}</li>
        )
    }
}



TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    delete: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}


export default TodoItem;