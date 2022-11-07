import React from "react";
import PostSummaryList from "../post-summary-list/post-summary-item";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <button className="nav-link active">For You</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Trending</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">News</button>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="https://1.bp.blogspot.com/-AK_Rkk0CHp0/WoTq4_ScibI/AAAAAAAAAlY/w8YS93ty8iEzJZ14LHKjgEZpOPgSd4XCACPcBGAYYCw/s1600/IMG_4730_3_SpaceX%2BFalcon%2BHeavy%2B1_Ken%2BKremer.jpg" className="w-100" alt = "none"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;