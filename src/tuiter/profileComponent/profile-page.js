import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>
            <div className="position-relative border-start border-end border-top border-1">

                <div className="row">
                    <i className="bi bi-arrow-left fs-5"></i>
                </div>
                <div className="row">
                    <div>{profile.name}</div>
                    <div>{profile.tweetsNumber} Tweets</div>
                </div>

                <img src={profile.profilePicture} className="position-absolute" alt="" />
                <img src={profile.bannerPicture} className="pt-2 w-100" alt="" />

                <button className="btn btn-default border border-1 rounded-pill float-end mt-2 me-2 button">
                    <Link to="/tuiter/edit-profile" href="/" className="nav-link" >Edit Profile</Link>
                </button>
            </div >

            <div className="border-start border-end border-bottom border-1 w-100">
                <div>{profile.name}</div>
                <div>{profile.handle}</div>
                <div>{profile.bio}</div>

                <div className=" pt-2 pb-3">
                    <div className="pb-1">
                        <i className="bi bi-geo-alt pe-2"></i>{profile.location}
                        <i className="bi bi-balloon ms-3 pe-2"></i>Born {profile.dateOfBirth}
                        <i className="bi bi-calendar3 ms-3 pe-2"></i>Joined {profile.dateJoined}
                    </div>

                    <span>{profile.followingCount}</span>
                    <span>Following</span>
                    <span>{profile.followersCount}</span>
                    <span className="pe-3">Followers</span>
                </div>
            </div>

        </>
    );
};
export default ProfilePage;