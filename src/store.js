
// import { createStore } from 'redux';
// import rootReducer from './redux/reducers/contactsReducer';

// const configureStore = () => {
//   return createStore(
//     rootReducer,
//     // You can add middleware like Redux DevTools here
//   );
// };

// export default configureStore;

import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from "../feature/posts/postsSlice";
// import usersReducer from "../feature/users/usersSlice";
import contactReducer from './redux/reducers/contactsReducer'

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
    }
}) 