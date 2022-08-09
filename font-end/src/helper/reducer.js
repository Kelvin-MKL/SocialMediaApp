export const reducer = (state, action) => {
  switch (action.type) {
    case "createPost":
      const newPost = [...state.posts];
      const tempId = Math.floor(Math.random() * Date.now());
      newPost.unshift({
        _id: tempId,
        title: action.payload.title,
        content: action.payload.content,
      });

      return { ...state, posts: newPost };

    case "deletePost":
      const current = [...state.posts];
      const filtered = current.filter(
        (post) => post._id !== action.payload._id
      );
      return { ...state, posts: filtered };

    default:
      return console.log("default");
  }
};

export const ACTION = {
  CREATEPOST: "createPost",
  DELETEPOST: "deletePost",
};
