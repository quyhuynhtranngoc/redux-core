const initValue = [
  { id: 1, name: "learn reactjs", completed: false, priority: "Medium" },
  { id: 2, name: "learn redux", completed: true, priority: "High" },
  { id: 3, name: "learn javascript", completed: false, priority: "Low" },
];

const todoListReducer = (state = initValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
export default todoListReducer;
