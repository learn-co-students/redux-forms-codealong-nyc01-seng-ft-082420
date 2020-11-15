export default function manageTodo(state = { todos: [] }, action) {

  switch (action.type) {
    case 'ADD_TODO':
      console.log("reducer received this action:", action);
      return {todos: [...state.todos, action.payload] }
    default:
      return state;
  }
}
