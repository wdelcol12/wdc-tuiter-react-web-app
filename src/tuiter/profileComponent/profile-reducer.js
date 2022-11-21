import { createSlice } from "@reduxjs/toolkit";
import profile from "./profile.json";



const profileSlice = createSlice({
                 name: 'profile',
                 initialState: profile,
                 reducers: {
                     updateProfile(state, action) {
                         console.log('state', action.payload.name);
                         return {
                             ...state,
                             name: action.payload.name,
                             bio: action.payload.bio,
                             location: action.payload.location,
                             website: action.payload.website,
                             dateOfBirth: action.payload.dateOfBirth
                         };
                     }
                 }
             });

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;