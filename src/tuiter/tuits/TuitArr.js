import React from "react";
import { useSelector } from "react-redux";
import TuitContent from "./tuit-content";

const TuitArr = () => {
    const tuitArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                tuitArray.map(tuit => <TuitContent key={tuit._id} tuits={tuit} />)
            }
        </ul>
    );
};
export default TuitArr;