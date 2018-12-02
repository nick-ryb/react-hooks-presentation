const useImmerText = `
const initial = { count: 0 };
function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, initial);
  return (
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
  );}
`

export default useImmerText