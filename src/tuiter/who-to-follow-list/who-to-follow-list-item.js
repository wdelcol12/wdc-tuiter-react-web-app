import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'Peter Griffin', handle: 'Peter-Griffin', avatarIcon: 'https://th.bing.com/th/id/R.c373256df559bbdd7dd4f4c947edab58?rik=FJKN1q7V%2f7fs%2fA&riu=http%3a%2f%2fimages.wikia.com%2fvillains%2fimages%2fc%2fc2%2fPeter_Griffin.png&ehk=zFTfJwSBIRx6Kh010UDQYgWIoFshk7dHglZYcSMWIqk%3d&risl=&pid=ImgRaw&r=0' }
    }
) => {
    return(
        <li className="list-group-item m-0">
            <div className="row">
                <div className="col-2 d-flex p-1">
                    <img alt="text" className="float-end my-auto rounded-circle" src={`/images/${who.avatarIcon}`} height={48}/>
                </div>
                <div className="col-6">
                    <div>
                        <span className="fw-bolder">{who.userName}</span>
                        <i className="bi bi-patch-check-fill text-primary ms-1 me-1 wd-ml-font"/>
                    </div>
                    <div className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-4 d-flex">
                    <button className="btn btn-light rounded-pill my-auto wd-button text-light">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;