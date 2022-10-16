import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowItem.js";
import who from "../WhoToFollowList/index.js"
const WhoToFollowList = () => {
    return (`
    
          <p> Who to follow </p>      
         
           ${who.map(who => { return (WhoToFollowListItem(who)); }).join('')}

`);

}
export default WhoToFollowList;
