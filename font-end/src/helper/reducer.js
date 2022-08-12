export const initialState = {
  user: { _id: "213", name: "Kelvin", email: "kelvin@gmail.com" },
  isAuth: true,
  posts: [{ _id: "1", title: "post1", content: "G'day" }],
};

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

    case "auth":
      return { ...state, isAuth: !state.isAuth };

    default:
      return console.log("default");
  }
};

export const ACTION = {
  CREATEPOST: "createPost",
  DELETEPOST: "deletePost",
  AUTH: "auth",
};
