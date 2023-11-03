import {useSetRecoilState} from "recoil";
import {todoState} from "../state/atoms/TodoState";

export default function Todo({text, id}){
    const setTodos = useSetRecoilState(todoState)
    function deleteTodo(){
        setTodos((prevTodos) =>{
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    return(
        <div>
            <p>{text}
            <button onClick={deleteTodo}>X</button>
            </p>
        </div>
    )
}