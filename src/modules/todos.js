// 리덕스 모듈 만들기
// 1. 초기상태지정
// 2. 액션타입
// 3. 액션생성함수 정의
// 4. 리듀서 선언

// 1. 초기상태선언
const initialState = [ //배열을 관리한다
    // 이배열 안에 이런형태의 객체가 들어간다.
    // {
    //     id:1,
    //     text: "예시",
    //     done: false
    // }
]

const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// 액션생성함수
let nextId = 1
export const addTodo = text => ({
    type: ADD_TODO,
    todo : {
        id: nextId++,
        text: text,
        done: false,
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

// 4. 리듀서 선언
export default function todos(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                todo => 
                todo.id === action.id ? // id가 일치하면 
                { ...todo, done: !todo.done} // done값을 반전
                : todo // 아니라면 그대로 둠
            )
        default:
            return state;
    }
}