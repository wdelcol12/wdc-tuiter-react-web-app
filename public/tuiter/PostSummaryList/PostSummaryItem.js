function PostSummaryItem(pos) {
    return (`
     <div class="list-group-item list-group-flush">
                <div class="row">
                   <div class="col-8 pe-0">
                                <p class="colorGray">${pos.topic}</p>
                                <p>${pos.userName} ${pos.time}</p>
                                <p> <strong>${pos.title}</strong></p>
                            </div>
                            <div class="col-2 col-lg-3 col-sm-3">
                                <img src=${pos.image} class="img-fluid" style="height:50px">
                            </div>
    
    `)

}
export default PostSummaryItem;