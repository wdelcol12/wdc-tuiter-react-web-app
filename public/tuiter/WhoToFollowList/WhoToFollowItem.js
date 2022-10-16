const whoToFollowItem = (who) => {
    return (`
       <li class = "list-group-item" >
        <div class="row">
        <div class= "col-2" >
        <img src=${who.avatarIcon} class="rounded-circle newFollow" style="height:50px;width:50px;">
        </div>
        <div class="col-6">
                ${who.userName}
                <p class="colorGray">@${who.handle}</p>
              </div>
              <div class="col-4">
                <button class="btn w-100 btn-primary rounded-pill mt-2 newFollow"> Follow </button>
              </div>
            </div>
          </li>
        
    `);
}

export default whoToFollowItem;