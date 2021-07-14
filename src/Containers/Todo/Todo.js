import { AiOutlinePlus } from 'react-icons/ai';
import React, { Component } from 'react'
import { Button, Input,} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './Todo.css';


export default class Todo extends Component {
    constructor(props){
      super(props);
      
      this.state = {todos: this.props.todos, typing: 'task'}
    }

    setValues = (e) => {
      this.setState({typing: e.target.value})
    }

    setTodo = () => {
      let data = [...this.state.todos]
      data.push({title:this.state.typing})
      this.setState({todos: data})
    }
    render() {
        return (
            <div className="rounded overflow-hidden shadow p-3 bg-light">
              <h2>Todo App</h2>

              <div className="d-flex align-items-center mb-3">
              <Input 
              type="text" 
              placeholder="New Task" 
              value ={this.state.typing} 
              className="me-2"
              onChange={this.setValues}
              />
              <Button 
              color="primary"
              onClick={this.setTodo} 
              >
                <AiOutlinePlus color="white" fontSize="1.5em" />
              </Button>
              </div>
              <ListGroup>
                {
                    this.state.todos.map((item, index)=>{
                       return  <ListGroupItem tag="a" href="#" key={index} action>{index + 1}.  {item.title}</ListGroupItem>
                    })
                }
              </ListGroup>
            </div>
        )
    }
}
