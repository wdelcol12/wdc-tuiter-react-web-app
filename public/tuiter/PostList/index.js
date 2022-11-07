import home_Post from "../PostList/posts.js";

import PostItems from "../PostList/PostItems.js"

const PostList = (pos) => {
    return (`
        <ul class="list-group">
        
       ${home_Post.map(input => {
        return(PostItems(input));
    }).join('')
    }
       </ul>
    `)

}

export default PostList;