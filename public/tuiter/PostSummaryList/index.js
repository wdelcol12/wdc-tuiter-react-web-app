import exploreItems from "./PostList.js";
import PostSummaryItem from "./PostSummaryItem.js";

function PostSummaryList() {
    return(`
    <div class="list-group">
        ${exploreItems.map(item => {
        return(PostSummaryItem(item));
    }).join('')
    }
    </div>
    `)
}

export default PostSummaryList;