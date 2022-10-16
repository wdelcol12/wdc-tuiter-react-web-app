import PostList from "../PostList/index.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

/* eslint-env jquery */
function homeComponent() {
    $('#wd-home').append(`
   <div class="row">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar('home')}
    </div>
    
       <div class="col-10 col-lg-7 col-xl-6 bg-primary">
       ${PostList()}
    
     </div>
      <div class="col-4 d-none d-md-inline">
      ${PostSummaryList()}
      </div>
      </div>
    `)

}
/* eslint-env jquery */
$(homeComponent);