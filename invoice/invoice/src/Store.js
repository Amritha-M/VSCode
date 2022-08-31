import { createContext, useContext, useReducer } from "react";
const initialState = {
  abc: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "abc": {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
};

const GlobalContext = createContext({
  state: initialState,
  dispatch: () => {},
});

function useGlobalContext() {
  return useContext(GlobalContext);
}

const withCustomStore = (Component) => {
  return (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Component {...props} />
      </GlobalContext.Provider>
    );
  };
};

export { withCustomStore, useGlobalContext };


// import { useGlobalContext } from "./store";

// const CounterComp = () => {
//   const { state, dispatch } = useGlobalContext();

//   const handleClick = () => {
//     dispatch({ type: "counter", payload: { counter: state.counter + 1 } });
//   };
//   return (
//     <>
//       Counter Value: {state.counter}
//       <br />
//       <br />
//       <button onClick={handleClick}>Increment</button>
//     </>
//   );
// };

// export default CounterComp;