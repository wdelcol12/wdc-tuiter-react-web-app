

import React from "react";
const NavigationSidebar = () => {
  {
    active = 'explore'
  }
 ) => {
  return (
    <div className="list-group">
      <a className="list-group-item">Tuiter</a>
      <a className={`list-group-item
                     ${active === 'home'?'active':''}`}>
        Home
      </a>
      <a className={`list-group-item
                     ${active === 'explore'?'active':''}`}>
        Explore
      </a>
      <a className={`list-group-item
                     ${active === 'notifications'?'active':''}`}>
        Notifications
      </a>
      <a className={`list-group-item
                     ${active === 'messages'?'active':''}`}>
        Messages
      </a>
      <a className={`list-group-item
                     ${active === 'bookmarks'?'active':''}`}>
        Bookmarks
      </a>
      <a className={`list-group-item
                     ${active === 'lists'?'active':''}`}>
        Lists
      </a>
          <a className={`list-group-item
                           ${active === 'profile'?'active':''}`}>
              Profile
            </a>
            <a className={`list-group-item
                           ${active === 'more'?'active':''}`}>
              More
            </a>
          </div>
        );
       };

};
export default NavigationSidebar;



  /* <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
  
       
         <a href="../Home.html" class="fs-3 list-group-item"
         ${active === 'Home'}>
            <i class="fa-solid fa-house fs-3 colorGray"></i>
            <span class="d-none d-xl-inline colorGray">Home</span>
          </a>

          <a href="../explore.html" class="fs-3 list-group-item"
          ${active === 'Explore'}>
            <i class="fa-solid fa-hashtag fs-3 colorGray"></i>
            <span class="d-none d-xl-inline colorGray"> Explore </span>
          </a>

          <a href="../notification.html" class="fs-3 list-group-item"
         ${active === 'Notifications'}>
            <i class="fa-sharp fa-solid fa-bell fs-3 colorGray"></i>
            <span class="d-none d-xl-inline colorGray">Notifications</span>
          </a>

          <a href="../messages.html" class="fs-3 list-group-item"
          ${active === 'Messages'}>
            <i class="fa-solid fa-envelope fs-3 colorGray"></i>
            <span class="d-none d-xl-inline colorGray"> Messages</span>
          </a>

          <a href=".../bookmarks/index.html"class="fs-3 list-group-item"
          ${active === 'Bookmarks'}>
            <i class="fa-solid fa-bookmark fs-3 colorGray"></i>
            <span class = "d-none d-xl-inline colorGray">Bookmarks</span>
          </a>

          <a href="../lists.html" class="fs-3 list-group-item"
          ${active === 'Lists'}>
            <i class="fa-solid fa-list fs-3 colorGray"></i>
            <span class = "d-none d-xl-inline colorGray">Lists</span>
          </a>

          <a href="../profile.html" class="fs-3 list-group-item"
          ${active === 'profile'}>
            <i class="fa-solid fa-user fs-3 colorGray"></i>
            <span class = "d-none d-xl-inline colorGray">Profile</span>
          </a>

          <a href="../more.html" class="fs-3 list-group-item"
          ${active === 'More'}>
            <i class="fa-solid fa-ellipsis fs-3 colorGray"></i>
            <span class = "fs-2 d-none d-xl-inline colorGray">More</span>
          </a>
      
            
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `)
}*/