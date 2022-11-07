import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item m-0">
            <div className="row">
                <div className="col-2 d-flex p-1">
                    <img alt="N/A" className="float-end my-auto rounded-circle" src={who.avatarIcon} height={50}/>
                </div>
                <div className="col-6">
                    <div>
                        <span className="fw-bolder">{who.userName}</span>
                        <i className="bi bi-patch-check-fill text-primary ms-1 me-1"/>
                    </div>
                    <div className="text-secondary wd-medium-font">@{who.handle}</div>
                </div>
                <div className="col-4 d-flex">
                    <button className="btn btn-light wd-medium-font rounded-pill my-auto wd-button text-light">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;