import React from "react";
import TuitArr from "../tuits/TuitArr";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h2>Home</h2>
            <WhatsHappening />
            <TuitArr />
        </>
    );
};
export default HomeComponent;