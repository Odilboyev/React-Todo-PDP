import { AiOutlineCheckSquare, AiOutlineMinusSquare, AiOutlinePlus, AiTwotoneEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import React from 'react'
import { Button, Input, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';



const TodoRedux = (props) => {

    const data = useSelector(state => state)
    const todos = data.tasks;
    const value = data.value


    const dispatch = useDispatch()

    const typing = (e) => {
        const action = {
            type: "TYPING",
            payload: e.target.value
        }
        dispatch(action)
        console.log(action)
    }


    const add = () => {
        if (value === "") {
            alert('Please write a task')
        } else {

            const action = {
                type: "ADD_TASK",
                payload: value
            }
            dispatch(action)
        }

    }
    const deleteTask = (index) => {
        const action = {
            type: "DELETE_TASK",
            payload: index
        }
        dispatch(action)
    }

    const setComplete = (index) => {
        const action = {
            type: "COMPLETE",
            payload: index
        }
        dispatch(action)
    }
    let editing = false

    const editItem = (e, i) => {
        deleteTask(i)
        editing = true
        const action = {
            type: "EDIT",
            payload: e
        }
        dispatch(action)
    }

    return (
        <div className="rounded overflow-hidden shadow p-3 bg-light">
            <h2>TodoRedux App</h2>

            <div className="d-flex align-items-center  mb-3 w-100">
                <Input
                    type="text"
                    placeholder="New Task"
                    className="me-2"
                    value={value}
                    onChange={typing}
                />

                <Button
                    color="primary"
                    className="float-right"
                    onClick={add}
                    id="btn"
                >
                    <AiOutlinePlus color="white" fontWeight="600" fontSize="1.5rem" />
                </Button>

            </div>

            <ListGroup>
                {
                    todos.map((item, index) => {

                        return <ListGroupItem tag="a" href="#" className="w-100 d-flex align-items-center justify-content-between" key={index} action>

                            <p style={{ textDecoration: item.complete ? "line-through" : "none" }}>{index + 1}.  {item.title}</p>

                            <div>
                                <Button className="me-2" onClick={() => editItem(item.title, index)}><AiTwotoneEdit color="white" fontWeight="600" fontSize="1.5rem" /></Button>

                                <Button color="success me-2" onClick={() => setComplete(index)}>
                                    {item.complete ? <AiOutlineCheckSquare color="white" fontWeight="600" fontSize="1.5rem" /> : <AiOutlineMinusSquare color="white" fontWeight="600" fontSize="1.5rem" />}

                                </Button>

                                <Button onClick={() => deleteTask(index)} color="danger">
                                    <BsTrash color="white" fontWeight="600" fontSize="1.5rem" />
                                </Button></div>

                        </ListGroupItem>
                    })
                }
            </ListGroup>
        </div>
    )

}
export default TodoRedux