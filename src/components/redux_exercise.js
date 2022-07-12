import { createStore } from 'redux';
import React from 'react';

// 1.상태초기값 설정
// 2.액션타입 선언
// 3.액션 생성함수 정의
// 4.reducer정의
// 5.store생성

// 1.리덕스에서 관리 할 상태 정의
const initialstate = {
    counter: 0,
    text:'',
    list: []
}

// 2.액션타입선언
const INCREASE = "INCREASE";
const DECREASE ="DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 3.액션 생성함수 정의
const increase = () => {
    return {
        type: INCREASE
    }
}
const decrease = () => ({
    type: DECREASE
})
const changeText = text => ({
    type: CHANGE_TEXT,
    text
})
const addList = item => ({
    type: ADD_TO_LIST,
    item
})

// 리듀서 만들기
function reducer(state = initialstate, action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }  
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }  
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item) // 배열에 하나만 추가하겠다
            } 
        default:
            return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener)

//액션 디스패치 해보기
store.dispatch(increase())
store.dispatch({ //위에랑 같음
    type: INCREASE
})
store.dispatch(decrease())
store.dispatch(changeText('안녕하세요'))
store.dispatch(addList({id:1, name:'green', age:30}))
console.log(decrease()) // 액션 객체가 반환됨

