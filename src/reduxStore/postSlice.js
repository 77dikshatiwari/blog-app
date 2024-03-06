import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPosts: [],
    userPosts: [], 
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setAllPosts: (state, action) => {
            state.allPosts = action.payload.allPosts;
        },
        setUserPosts: (state, action)=> {
            state.userPosts = action.payload.userPosts;
        },
    }
});

export const {setAllPosts, setUserPosts} = postSlice.actions;

export default postSlice.reducer;