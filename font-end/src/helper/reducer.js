export const initialState = {
  user: { _id: "213", name: "Kelvin", email: "kelvin@gmail.com" },
  isAuth: true,
  posts: [{ _id: "1", title: "post1", content: "G'day" }],
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "createPost":
      console.log("reducer create post called");
      const newPost = [...state.posts];
      const tempId = Math.floor(Math.random() * Date.now());
      newPost.unshift({
        _id: tempId,
        title: payload.title,
        content: payload.content,
      });

      return { ...state, posts: newPost };

    case "deletePost":
      console.log("reducer delete post called");
      const current = [...state.posts];
      const filtered = current.filter((post) => post._id !== payload._id);
      return { ...state, posts: filtered };

    case "auth":
      console.log("reducer handle auth called");
      return { ...state, isAuth: !state.isAuth };

    default:
      return new Error("no case found.");
  }
};

export const ACTION = {
  CREATEPOST: "createPost",
  DELETEPOST: "deletePost",
  AUTH: "auth",
};
