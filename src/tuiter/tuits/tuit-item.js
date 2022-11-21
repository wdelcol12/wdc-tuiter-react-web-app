import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TuitStats from "./tuit-stats.js"
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ tuits }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <>
            <li className="list-group-item" >
                <div className="row pt-1">
                    <div className="col-1 ps-2">
                        <img className="rounded-circle" height={48} src={tuits.image} alt="" />
                    </div>
                    <div className="col-11 float-left ps-4 pe-4">
                        <div>{tuits.username}</div>
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

export default TuitItem;