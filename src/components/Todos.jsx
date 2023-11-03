import {useRecoilState} from "recoil";
import {todoState} from "../state/atoms/TodoState";
import {useState} from "react";
import Todo from "./Todo";

export default function Todos(){
    const [todos, setTodos] = useRecoilState(todoState);
    const [inputText, setInputText] = useState('')
    function addTodo(){
        setTodos((prevTodos) => [...prevTodos,{id:Math.random(),text:inputText}])
        // After adding the todo we have to empty the text box value
        setInputText('')
    }

    function handleInputChange(e){
        setInputText(e.target.value)
    }
    function clearTodos() {
        setTodos([])
    }

    return(
        <main>
            <input value ={inputText} onChange={handleInputChange} type="text" id="todoInput"/>
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearTodos}>Clear Todo</button>
            {
                todos.map((todo) => {
                    return (
                        <Todo key = {todo.id} text = {todo.text} id = {todo.id}/>
                    )
                })
            }
        </main>
    )
}