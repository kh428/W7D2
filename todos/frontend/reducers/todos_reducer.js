import { RECEIVE_TODOS } from "../actions/todo_actions";
import { RECEIVE_TODO } from "../actions/todo_actions";


const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
        const nextState = {}
        // add everything to current state 
        action.todos.map ( (todo) => nextState[todo.id] = todo);
        return nextState;

    case RECEIVE_TODO:
      const updatedState = Object.assign( {}, state, {[action.todo.id]: action.todo});
      return updatedState;

    default:
      return state;
  }
};

export default todosReducer;