import WhoToFollowListItem from "./WhoToFollowItem.js";
import who from "./index.js"
const WhoToFollowList = () => {
    return (`
    
          <p> Who to follow </p>      
         
           ${who.map(who => { return (WhoToFollowListItem(who)); }).join('')}

`);

}
export default WhoToFollowList;
