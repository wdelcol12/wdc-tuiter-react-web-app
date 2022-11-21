import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./index.css";

function showRetweet(post) {
    if (post.retweetedBy) {
        return (
            <div className="wd-retweetedBy ps-3">
                <i className="bi bi-arrow-repeat wd-icon"></i>
                {post.retweetedBy} Retweeted
            </div>
        )

    }
}

function showCard(post) {
    return (
        <div className="card wd-card mt-2">
            {showCardImage(post)}
            {showCardContent(post)}
        </div>
    )
}

function showCardImage(post) {
    if (post.cardImage) {
        return (
            <img className="wd-cardImage" src={post.cardImage} alt="" />
        )
    }
}

function showCardContent(post) {
    if (post.cardUsername) {
        return (
            <div className="pt-1 pb-1 ps-2 pe-2">
                <img className="rounded-circle wd-cardAvatarIcon ms-1 mt-1" src={post.cardAvatarIcon} alt="" />
                <div className="wd-username">{post.cardUsername}</div>
                <i className="bi bi-check-circle-fill wd-check"></i>
                <div className="wd-handle">@{post.cardHandle} · {post.cardTime}</div>
                <div className="wd-float-done ps-1">{post.card_message}</div>
            </div>
        )
    }
}

function showThread(post) {
    if (post.showThreadOption) {
        return (
            <div className="pt-2 pb-1 wd-thread">
                Show this thread
            </div>

        )
    }
}

const PostItem = ({ post }) => {
    return (
        <>
            <li className="list-group-item" >
                {showRetweet(post)}
                <div className="row pt-1">
                    <div className="col-1 ps-1">
                        <img className="rounded-circle" height={48} src={post.avatarIcon} alt="" />
                    </div>
                    <div className="col-11 float-left ps-2 pe-2">
                        <div className="wd-username">{post.userName}</div>
                        <i className="bi bi-check-circle-fill"></i>
                        <div className="wd-handle">@{post.handle} · {post.time}</div>
                        <i class="bi bi-three-dots"></i>
                        <div className="wd-float-done">{post.message}</div>

                        {showCard(post)}

                        <div className="row pt-2 pb-2 " >
                            <div className="col-3">
                                <i class="bi bi-chat "></i>
                                {post.comment}
                            </div>
                            <div className="col-3">
                                <i className="bi bi-arrow-repeat"></i>
                                {post.retweet}
                            </div>
                            <div className="col-3">
                                <i class="bi bi-heart"></i>
                                {post.like}
                            </div>
                            <div className="col-3">
                                <i class="bi bi-box-arrow-up"></i>
                            </div>
                        </div>
                        {showThread(post)}
                    </div>
                </div>
            </li >
        </>
    );
};


export default PostItem;
