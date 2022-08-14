# SocialMediaApp

This is just an example of using context and reducer in react application.
Context is a way to pass data through component tree without having to pass props down manually at every level.
Reducer is a state management tool that monitors different type of states at once.
With the combination of context and reducer, it allows us to manage state in one place, making the code easier to manage.

# Limitation

Assuming the user is authenciated when the login button is clicked, the application needs to have access to the user information and
posts. Currently, this application is developed with statics data while in other case fetch request/useEffect maybe required. In that case,
it may encounter an issue that the useEffect func is called everytime the state changes, which is not desired. To solve that issue, a memo hook may be used.

# Scripts available

In the font-end directory, run `npm install all -g` to install the dependencies needed on the font-end side.
Then run `npm start` to start the development browser.
