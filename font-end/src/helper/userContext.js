import { createContext, useReducer, useContext } from "react";
import { reducer, initialState, ACTION } from "./reducer";

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPost = (title, content) => {
    dispatch({
      type: ACTION.CREATEPOST,
      payload: { title: title, content: content },
    });
  };

  const deletePost = (post) => {
    dispatch({
      type: ACTION.DELETEPOST,
      payload: { _id: post._id },
    });
  };

  const handleAuth = () => {
    dispatch({ type: ACTION.AUTH });
  };

  const value = {
    user: state.user,
    isAuth: state.isAuth,
    posts: state.posts,
    addPost,
    deletePost,
    handleAuth,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("userContext is undefined!");
  }
  return context;
};
export default useUser;
