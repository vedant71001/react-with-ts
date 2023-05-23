import { useReducer } from "react";

type CountState = {
  count: number;
};


function reducer(state: CountState, action: string) {
  switch (action) {
    case "add":
      return { count: state.count + 1 };
    case "subtract":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default: 
        return state;
  }
}
const initialState = { count: 0 };

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch("add")}>Add</button>
      <button onClick={() => dispatch("subtract")}>Subtract</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
