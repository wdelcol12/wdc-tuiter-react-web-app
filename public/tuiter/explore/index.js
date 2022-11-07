import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";
/* eslint-env jquery */
function exploreComponent() {
    $('#wd-explore').append(`
       <h2>Explore</h2>
   <div class="container-fluid">
   <div class="row">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
       <h3>Navigation Sidebar</h3>
        ${NavigationSidebar()}
        </div>
   <div class="col-10 col-lg-7 col-xl-6 bg-primary">
   <div class="row">
    ${ExploreComponent()}
    </div>
   </div>
   <div class="col-4 d-none d-md-inline">
    <div class="row">
        <ul class="list-group card list-group-flush newBorder">
          <li class="list-group-item">
            ${WhoToFollowList()}
        </li>
        </ul>
        </div>
    </div>
  </div>
   
   `);
}

$(exploreComponent);
