export default function manageTodo(state = {
  todos: [],
}, action) {

  switch (action.type) {
    case expression:
      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state
  }

  return state;
}
