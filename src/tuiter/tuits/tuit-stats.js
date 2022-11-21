import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const LikedIcon = ({ tuit }) => {
const dispatch = useDispatch();
if (tuit.liked) {
return (
<i className="bi bi-heart-fill me-2"
   onClick={() => {
       dispatch(updateTuitThunk({
                                    ...tuit,
                                    likes: tuit.likes - 1,
                                    liked: false
                                }));
   }}
>
</i >
)
}
return (<i className="bi bi-heart me-2"
   onClick={() => {
       dispatch(updateTuitThunk({
                                    ...tuit,
                                    likes: tuit.likes + 1,
                                    liked: true
                                }));
   }}
></i >)
}

const DislikedIcon = ({ tuit }) => {
const dispatch = useDispatch();
if (tuit.disliked) {
return (
<i className="bi bi-hand-thumbs-down-fill me-2" onClick={() => {
    dispatch(updateTuitThunk({
                                 ...tuit,
                                 dislikes: tuit.dislikes - 1,
                                 disliked: false
                             }));
}
} ></i >
)
}
return (<i className="bi bi-hand-thumbs-down me-2" onClick={() => {
dispatch(updateTuitThunk({
                         ...tuit,
                         dislikes: tuit.dislikes + 1,
                         disliked: true
                     }));
}}
></i >)
}

const TuitStats = ({ tuit }) => {
return (
<>
<div className="row pt-2">
    <div className="row pt-2 pb-2 wd-data" >
        <div className="col-2">
            <i className="bi bi-chat wd-icon"></i>
            {tuit.replies}
        </div>
        <div className="col-2">
            <i className="bi bi-arrow-repeat wd-icon"></i>
            {tuit.retuits}
        </div>
        <div className="col-3">
            {LikedIcon({ tuit })}{tuit.likes}
        </div>
        <div className="col-3">
            {DislikedIcon({ tuit })}{tuit.dislikes}
        </div>
        <div className="col-2">
            <i className="bi bi-box-arrow-up"></i>
        </div>
    </div>
</div>
</>
);
};


export default TuitStats;