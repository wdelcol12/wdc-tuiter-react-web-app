import { updateProfile } from "../profileComponent/profile-reducer.js"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";



const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    let [info, setInfo] = useState(profile);
    const dispatch = useDispatch();
    const profileClickHandler = () => {
        const newProfile = {
            ...profile,
            name: info.name,
            bio: info.bio,
            location: info.location,
            website: info.website
        }
        dispatch(updateProfile(newProfile));
    }
    return (
        <>
            <div className="position-relative border-start border-end border-top border-1">
                <div className="pt-2 pb-2">
                    <Link to="/tuiter/profile" href="/" className="nav-link" ><i className="bi bi-x fs-4 ps-2 pe-4"></i></Link>
                    <div className="pt-1">
                        Edit profile
                    </div>
                    <Link to="/tuiter/profile" href="/" className="nav-link" >
                        <button className="btn btn-dark border border-1 rounded-pill float-end me-2 button" onClick={profileClickHandler}>
                            Save
                        </button></Link>
                </div>

                <img src={profile.profilePicture} className="position-absolute wd-icon w-100" alt="" />
                <img src={profile.bannerPicture} className="pt-2 w-100" alt="" />
            </div >

            <div className="border-start border-end border-bottom border-1 w-100 ">
                < div className="mb-3" >
                    <div>Name</div>
                    <textarea value={info.name} className="form-control"
                              onChange={(event) => setInfo({ ...info, name: event.target.value })} ></textarea>
                </div >

                <div className="mb-3">
                    <div>Bio</div>
                    <textarea value={info.bio} className="form-control"
                              onChange={(event) => setInfo({ ...info, bio: event.target.value })} ></textarea>
                </div>

                <div className="mb-3">
                    <div>Location</div>
                    <textarea value={info.location} className="form-control"
                              onChange={(event) => setInfo({ ...info, location: event.target.value })} ></textarea>
                </div>

                <div className="mb-3">
                    <textarea value={info.website} className=" form-control" placeholder="Website"
                              onChange={(event) => setInfo({ ...info, website: event.target.value })} ></textarea>
                </div>

                <div className="mb-3">
                    <span>Birth date · </span>
                    <span>Edit</span>
                    <div>{info.dateOfBirth}</div>
                </div>

                <div className="mb-3">
                    <div>Switch to professional</div>
                    <i class="bi bi-chevron-right float-end"></i>
                </div>
                <div className="pb-5"></div>
            </div >

        </>
    );
};
export default EditProfile;