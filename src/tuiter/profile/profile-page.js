import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>
            <div className="position-relative border-start border-end border-top border-1">

                <div className="row wd-float-left">
                    <i className="bi bi-arrow-left wd-arrow fs-5"></i>
                </div>
                <div className="row wd-float-left">
                    <div className="wd-large-fonts">{profile.name}</div>
                    <div className="wd-small-fonts">{profile.tweetsNumber} Tweets</div>
                </div>

                <img src={profile.profilePicture} className="position-absolute wd-icon wd-fix-width" alt="" />
                <img src={profile.bannerPicture} className="pt-2 wd-banner w-100 " alt="" />

                <button className="btn btn-default border border-1 rounded-pill float-end mt-2 me-2 button">
                    <Link to="/tuiter/edit-profile" href="/" className="nav-link" >Edit Profile</Link>
                </button>
            </div >

            <div className="border-start border-end border-bottom border-1 wd-profile w-100">
                <div className="wd-large-fonts">{profile.name}</div>
                <div className="wd-small-fonts">{profile.handle}</div>
                <div className="wd-bio">{profile.bio}</div>

                <div className=" pt-2 pb-3">
                    <div className="wd-small-fonts pb-1">
                        <i className="bi bi-geo-alt pe-2"></i>{profile.location}
                        <i className="bi bi-balloon ms-3 pe-2"></i>Born {profile.dateOfBirth}
                        <i className="bi bi-calendar3 ms-3 pe-2"></i>Joined {profile.dateJoined}
                    </div>

                    <span className="wd-number">{profile.followingCount}</span>
                    <span className="wd-small-fonts pe-3">Following</span>
                    <span className="wd-number">{profile.followersCount}</span>
                    <span className="wd-small-fonts pe-3">Followers</span>
                </div>
            </div>

        </>
    );
};
export default ProfilePage;