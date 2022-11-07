import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const likedIcon = ({ tuit }) => {
    if (tuit.liked) {
        return (
            <i className="bi bi-heart-fill"></i>
        )
    }
    return (<i className="bi bi-heart"></i>)
}


const TuitStats = ({ tuit }) => {
    return (
        <>
            <div className="row pt-2">
                <div className="row pt-2 pb-2" >
                    <div className="col-3">
                        <i className="bi bi-chat "></i>
                        {tuit.replies}
                    </div>
                    <div className="col-3">
                        <i className="bi bi-arrow-repeat"></i>
                        {tuit.retuits}
                    </div>
                    <div className="col-3">
                        {likedIcon({ tuit })}
                        {tuit.likes}
                    </div>
                    <div className="col-3">
                        <i className="bi bi-box-arrow-up"></i>
                    </div>
                </div>
            </div>
        </>
    );
};


export default TuitStats;