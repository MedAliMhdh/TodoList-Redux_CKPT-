// let initialState = [{ id: 1, content: "homework", isCompleted: false }];
let aux = [];
const todoReducer = (state = aux, action) => {
  switch (action.type) {
    case "ADD_TODO":
      aux = [
        ...aux,
        {
          content: action.payload,
          id: Math.random(),
          isCompleted: false,
          editing: false,
        },
      ];
      return [
        ...state,
        {
          content: action.payload,
          id: Math.random(),
          isCompleted: false,
          editing: false,
        },
      ];
    case "DLETE_TODO":
      aux = state.filter((td) => td.id !== action.payload);
      return state.filter((td) => td.id !== action.payload);

    case "EDIT_TODO":
      aux = state.map((td) =>
        td.id == action.payload ? { ...td, editing: true } : td
      );
      return state.map((td) =>
        td.id == action.payload ? { ...td, editing: true } : td
      );

    case "CONFIRM_EDIT":
      aux = state.map((td) =>
        td.id == action.payload.id
          ? { ...td, content: action.payload.content, editing: false }
          : td
      );
      return state.map((td) =>
        td.id == action.payload.id
          ? { ...td, content: action.payload.content, editing: false }
          : td
      );

    case "CANCEL_EDIT":
      aux = state.map((td) =>
        td.id == action.payload ? { ...td, editing: false } : td
      );
      return state.map((td) =>
        td.id == action.payload ? { ...td, editing: false } : td
      );

    case "COMPLETE_TODO":
      aux = state.map((td) =>
        td.id == action.payload ? { ...td, isCompleted: !td.isCompleted } : td
      );
      return state.map((td) =>
        td.id == action.payload ? { ...td, isCompleted: !td.isCompleted } : td
      );

    case "FILTER_TODOS":
      return aux.filter((td) =>
        action.payload == "Completed"
          ? td.isCompleted
          : action.payload == "Uncompleted"
          ? !td.isCompleted
          : td
      );

    default:
      return state;
  }
};

export default todoReducer;
