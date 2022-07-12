import React,{ useState } from 'react';

const TodoList = ({ todos, onToggle }) => {
    return(
        <ul>
            {
                todos.map(todo =>(
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle}/>
                ))
            }
        </ul>
    )
}
const TodoItem = ({ todo, onToggle }) => {
    return(
        <li onClick={()=>onToggle(todo.id)}
        style={{ color: todo.done ? 'red' : 'black' }}
        >{todo.text}</li>
    )
}

const Todos = ({ todos, onCreate, onToggle }) => {
    const [ text, setText ] = useState("");
    const onChange = e => { //인풋에 값이 적히면 setText에 담김
        setText(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault(); //submit 이벤트 발생시 새로고침 방지
        onCreate(text); 
        setText(""); // 인풋초기화
    }
    console.log(todos);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text}
                placeholder="할 일을 등록하세요"
                onChange={onChange}/>
                <button type='submit'>등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;