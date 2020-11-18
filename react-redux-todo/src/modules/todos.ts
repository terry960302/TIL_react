
//action type
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

// action fucntion fit to type
export const addTodo = (text : string) => ({
    type : ADD_TODO,
    payload: text
})

export const toggleTodo = (id : number) =>({
    type : TOGGLE_TODO,
    payload : id
})

export const removeTodo = (id: number) => ({
    type : REMOVE_TODO,
    payload : id,
})

// Set types action for typesscript
type TodoAction =
 | ReturnType<typeof addTodo>
 | ReturnType<typeof toggleTodo>
 | ReturnType<typeof removeTodo>


 export type Todo = {
     id : number,
     text : string,
     done : boolean,
 }

 //상태값
 type TodoState = Todo[];

 //초기값
 const initialState : TodoState = [
     {id : 1, text: "타입스크립트 배우기", done : true},
     {id : 2, text: "타입스크립트와 리덕스 함께 사용해보기", done : true},
     {id : 3, text: "투두리스트 만들기", done : false}
 ]

 //리듀서
 function todos(state : TodoState = initialState, action : TodoAction): TodoState{
    switch(action.type){
        case ADD_TODO:
            const nextId = Math.max(...state.map(todo => todo.id)) + 1; //최고 높은 아이디값에 1 더히면 다음 배정할 아이템의 id
            return state.concat({
                id : nextId,
                text : action.payload,
                done : false,
            });

        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? {...todo, done : !todo.done} : todo) //들어온 id값과 동일한 아이템의 done 값을 변경

        case REMOVE_TODO:
            return state.filter(todo => todo.id  !== action.payload);

        default:
            return state;
     }
 }

 export default todos