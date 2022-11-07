import React from "react";
import {useSelector} from "react-redux";
import Profile from "./ProfileComponent.js"

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <Profile profile={profile}/>
    );
};
export default ProfileComponent;