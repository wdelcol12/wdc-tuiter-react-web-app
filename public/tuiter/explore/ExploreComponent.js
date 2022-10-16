import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
          <div class="col-10">
        <input type="text" class="form-control position-relative rounded-corners center-align" placeholder="Search Tuiter" />
          </div>


            <ul class="nav mt-1">
              <li class = "colorBlue"><a class="nav-link active" href="foryou.html">For you </a></li>
              <li class = " colorBlue"><a class="nav-link active" href="trending.html">Trending </a></li>
              <li class = " colorBlue d-md-inline" ><a class="nav-link active" href="News.html">News</a></li>
              <li class = " colorBlue d-none d-md-inline" > <a class="nav-link active" href="Sports.html">Sports</a></li>
              <li class = " colorBlue d-none d-md-inline"><a class="nav-link active" href="Entertainment.html">Entertainment</a></li>
            </ul>
            <div class="position relative">
          <img class = "mt-2 img-fluid" src="spaceX2.jpg" alt="spaceX"/>
                <h2 class="text-white bottom-0 position-absolute">SpaceX Starship</h2>
            </div>
            

            ${PostSummaryList()}
    `)
}

export default ExploreComponent;