import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk } from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "username": "Peter Griffin",
    "handle": "@Peter-Griffin",
    "image": "https://th.bing.com/th/id/R.c373256df559bbdd7dd4f4c947edab58?rik=FJKN1q7V%2f7fs%2fA&riu=http%3a%2f%2fimages.wikia.com%2fvillains%2fimages%2fc%2fc2%2fPeter_Griffin.png&ehk=zFTfJwSBIRx6Kh010UDQYgWIoFshk7dHglZYcSMWIqk%3d&risl=&pid=ImgRaw&r=0",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "disliked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
}

const tuitsSlice = createSlice({
       name: 'tuits',
       initialState,
       extraReducers: {
           [createTuitThunk.fulfilled]:
               (state, { payload }) => {
                   state.loading = false
                   payload = { ...templateTuit, ...payload }
                   state.tuits.push(payload)
               },
           [findTuitsThunk.pending]:
               (state) => {
                   state.loading = true
                   state.tuits = []
               },
           [findTuitsThunk.fulfilled]:
               (state, { payload }) => {
                   state.loading = false
                   state.tuits = payload
               },
           [findTuitsThunk.rejected]:
               (state) => {
                   state.loading = false
               },
           [updateTuitThunk.fulfilled]:
               (state, { payload }) => {
                   state.loading = false
                   const tuitNdx = state.tuits
                       .findIndex((t) => t._id === payload._id)
                   state.tuits[tuitNdx] = {
                       ...state.tuits[tuitNdx],
                       ...payload
                   }
               },
           [deleteTuitThunk.fulfilled]:
               (state, { payload }) => {
                   state.loading = false
                   state.tuits = state.tuits.filter(t => t._id !== payload)
               },
       },
       reducers: {
           deleteTuit(state, action) {
               const index = state.findIndex(tuit => tuit._id === action.payload);
               state.splice(index, 1);
           },

           createTuit(state, action) {
               state.unshift({
                                 ...action.payload,
                                 ...templateTuit,
                                 _id: (new Date()).getTime(),
                             })
           }
       }
   });

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;