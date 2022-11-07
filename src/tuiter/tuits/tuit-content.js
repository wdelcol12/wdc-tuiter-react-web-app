import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import TuitStats from "./TuitStats.js"
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer"


const TuitContent = ({ tuits }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <>
            <li className="list-group-item" >
                <div className="row pt-1">
                    <div className="col-1 ps-2">
                        <img className="rounded-circle" height={50} src={tuits.image} alt="Tweet" />
                    </div>
                    <div className="col-11 float-left">
                        <div>{tuits.userName}</div>
                        <i className="bi bi-check-circle-fill ps-2"></i>
                        <div className="ps-2">{tuits.handle} · {tuits.time}</div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuits._id)}></i>
                        <div></div>
                        {tuits.tuit}
                        <TuitStats tuit={tuits} />
                    </div>

                </div>
            </li >
        </>
    );
};

export default TuitContent;