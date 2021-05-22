export default function CountReducer(state = { count: 0 }, action) {
  if (action.type === "INCREMENT") {
    state.count++;
  } else if (action.type === "DECREMENT") {
    state.count--;
  }
  return { ...state };
}

