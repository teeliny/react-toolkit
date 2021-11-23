# Redux Toolkit

This is a demo app using RTK query from redux toolkit

## Table of contents

- [Overview](#overview)
  - [Installation](#installation)
  - [task](#task)
  - [Links](#links)
  - [built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
This app is a front end app that was built with React Library using vitejs.

Vitejs is a tool that helps to create a react app under 5 seconds with less dependencies in the node modules.

### Installation
As mentioned earlier, this app is but using vitejs command: [npm init vite your-app-name](https://github.com/vitejs/create-vite-app). 
You can add the framework and variant of your choice using the right flag. 

Alternatively, you can select from the option when prompted.

After the installation, cd into the your-app-name and run npm install. Also install [axios](https://axios-http.com/docs/intro), [react-redux and @reduxjs/toolkit](https://react-redux.js.org/tutorials/quick-start) using npm.


### Task
- Create an app hooks for basic redux hooks( useDispatch and useSelector) and export each custom hooks for usage in other part of the app.
- Create a store file that import all basic reducer functions from features folder. Remember to add the middleware property to configStore for caching purposes.
- In feature folder we created slice file for count using createSlice and slice to make api calls using RTK query from createApi, fetchBaseQuery. The RTK generate a corresponding query as the baseQuery specified in the slice file.
- Set a typical counter in App.tsx file using the app hooks exported from hooks file
- Call the query generated and harness the data value.

### Links
- Live Site URL: [Click to view the live site](https://redux-rtk-query.netlify.app/)


### Built with
- React
- TypeScript
- React-Redux
- Redux Toolkit

### Useful Resources
- [React redux quick start](https://react-redux.js.org/tutorials/quick-start)
- [RTK query](https://redux-toolkit.js.org/)
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
- [Dog API site](https://www.thedogapi.com/)

## Acknowledgments
A lot of kudos goes to Jason Lengstorf - Owner of Learn with Jason and Mark Erikson - Author of Redux for the lessons from the clip [Let's Learn Modern Redux](https://www.learnwithjason.dev/let-s-learn-modern-redux)
