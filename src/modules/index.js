// 하나의 프로젝트에 여러개의 리듀서가 있을때 한 리듀서로 합쳐서 사용
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서 만들기

const rootReducer = combineReducers({
    counter:counter,
    todos:todos
})

export default rootReducer;