import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSection from "./components/rightSection";
import LeftSection from "./components/leftSection";
import MiddleSection from "./components/middleSection";
import TopSection from "./components/topSection";
import { useReducer } from "react";
import React from "react";
import { reducer, ACTION, initialState } from "./helper/reducer";

const StateContext = React.createContext();
const DispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCreatePost = (title, content) => {
    dispatch({
      type: ACTION.CREATEPOST,
      payload: { title: title, content: content },
    });
  };

  const handleDelete = (post) => {
    dispatch({
      type: ACTION.DELETEPOST,
      payload: { _id: post._id },
    });
  };

  const handleAuth = () => {
    dispatch({ type: ACTION.AUTH });
  };

  return (
    <>
      <div className='containerTop'>
        <TopSection isAuth={state.isAuth} onAuth={handleAuth} />
        <div className='containerMiddle'>
          <LeftSection user={state.user} isAuth={state.isAuth} />
          <MiddleSection
            isAuth={state.isAuth}
            posts={state.posts}
            createPost={handleCreatePost}
            deletePost={handleDelete}
          />
          <RightSection />
        </div>
      </div>
    </>
  );
}

export default App;
