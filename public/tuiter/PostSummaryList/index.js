import exploreItems from "../PostSummaryList/PostList.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";

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