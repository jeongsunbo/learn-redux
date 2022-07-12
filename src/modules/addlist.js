// 리덕스 모듈 만들기
// 1. 초기상태 지정
// 2. 액션타입
// 3. 액션생성함수 정의
// 4. 리듀서 선언

// 1. 초기상태 선언
const initialState = {
    input: {
        usertext: "",
    },
    lists: [
        {
            id:1,
            usertext:'',
        }
    ]
}


// 2. 액션타입
const CHANGE_INPUT = "addTodos/CHANGE_INPUT";
const CREATE_TEXT = "addTodos/CREATE_TEXT";

// 3. 액션생성함수
const changeInput = () => ({type:CHANGE_INPUT});
const createText = () => ({type:CREATE_TEXT});

// 4. 리듀서 선언
function addlist(state=initialState, action){
    switch(action.type){
        case CHANGE_INPUT:
            return {
                ...state.input,
                [action.name]: action.value,
            }
        case CREATE_TEXT:
            return {
                input: initialState.input,
            }
        default:
            return state;
    }
} 