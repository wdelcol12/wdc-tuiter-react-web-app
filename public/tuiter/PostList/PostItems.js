
const PostItems = (pos) => {
    return (`
        <ul class="card list-group list-group-flush">
              <li class="list-group-item">
                <div class="row">
           
                <div class="col-2 col-lg-3 col-sm-3">
                                <img src="${pos.user_Image}" width ="40px" height="40px" class="rounded-corners">
                           
                            </div>
                   <div class="col me-2">
                    ${pos.userName}
                                        
                    </div>
                   <span class="colorGray"> ${pos.handle}</span>
                   <span class="colorGray"> ${pos.time} </span>
                   
                   <p>
                   ${pos.title}
                   </p>
                   
                   <div class="row">
                   <div class="card">
                   <img class="" src="${pos.image}">
                   <div class="">
                   <h5>
                   ${pos.title_img}
                   </h5>
                   
                   <div class="card-text colorGray">
                   ${pos.description}
                   </div>
                   <span class="colorGray">
                   ${pos.link}
                </span>
                </div>
                </div>
                </div>
                <div class="row mt-2">
                <div class="col">
                <span> Comments ${pos.comments} </span>
                
                </div>
                
                <div class="col">
                
                <span> Retweets ${pos.retweet} </span>
                
                </div>
                
                <div class="col">
                
                <span> Likes ${pos.likes}</span>
                
                </div>
                
                </div>
                </div>
                </li>
                </ul>
               
        
                
             
                   
    
    `)


}
export default PostItems;