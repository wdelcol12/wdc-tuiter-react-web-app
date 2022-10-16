import home_Post from "./posts.js";

import PostItems from "./PostItems.js"

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