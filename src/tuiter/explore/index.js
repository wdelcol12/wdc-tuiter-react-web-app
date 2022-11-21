import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill"/>
                    <i className="bi bi-search position-absolute"/>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-th text-primary float-end bi bi-gear-fill fs-2 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href="/#" className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img alt="text" src="/images/spa.jpeg" className="w-100"/>
                <h1 className="position-absolute text-white wd-fixedbot">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};

export default ExploreComponent;