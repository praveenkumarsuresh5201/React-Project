import "../Assets/css/Company.css";
import blog from "../Assets/images/blog.jpg"
import achive from "../Assets/images/achive.jpg";
import history from "../Assets/images/history.png"

export default function Company(){
    return(
        
        <div class="company-section pt-5 pb-5" id="COMPANY">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="company-section-heading">COMPANY</h1>
                    <p class="company-section-description">
                    "Discover our story, achievements, and insights at Wanderlust Journeys – where every journey begins."
                    </p>
                </div>
                <div class="col-12 col-md-4">
                    <div class="company-card p-3 mb-3">
                        <img src={blog} alt="" class="company-card-image" />
                        <h1 class="company-card-title mt-3">Blog</h1>
                        <p class="company-card-description">
                        Stay inspired with our latest travel tips, stories, and guides from experts around the globe.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="company-card p-3 mb-3">
                        <img src={achive} alt="" class="company-card-image" />
                        <h1 class="company-card-title mt-3">Achievements</h1>
                        <p class="company-card-description">
                        Proudly showcasing our milestones and accolades, earned through dedication and passion for travel excellence.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="company-card p-3 mb-3">
                    <img src={history} alt="" class="company-card-image" />
                        <h1 class="company-card-title mt-3">History</h1>
                        <p class="company-card-description">
                            FExplore our journey from humble beginnings to becoming a trusted name in trip planning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
              
    );
}