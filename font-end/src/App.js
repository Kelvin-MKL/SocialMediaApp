import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSection from "./components/rightSection";
import LeftSection from "./components/leftSection";
import MiddleSection from "./components/middleSection";
import TopSection from "./components/topSection";
import { useReducer } from "react";
import React from "react";
import { reducer, ACTION } from "./helper/reducer";

const StateContext = React.createContext();
const DispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, {
    user: { _id: "213", name: "Kelvin", email: "kelvin@gmail.com" },
    posts: [{ _id: "1", title: "post1", content: "G'day" }],
  });

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

  return (
    <>
      <div className='containerTop'>
        <TopSection />
        <div className='containerMiddle'>
          <LeftSection user={state.user} />
          <MiddleSection
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
