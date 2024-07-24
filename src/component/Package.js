import "../Assets/css/Package.css"
import adventure from "../Assets/images/adventure.jpg"
import group from "../Assets/images/group.jpg";
import education from "../Assets/images/education.jpg";

export default function Package(){
    return(
        <div class="package-section pt-5 pb-5" id="PACKAGE">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="package-section-heading">PACKAGE</h1>
                        <p class="package-section-description">
                        "Discover Your Next Adventure: All-Inclusive Trip Packages for Unforgettable Experiences!"
                        </p>
                    </div>
                </div>
                <div class='container'>
                    <div class="col-12 col-md-4" className="image-container">
                            <a target="_blank" href="#ADVENTURE TOUR" >
                            <img src={adventure} href = "#Image1" alt="" class="image-1" />
                            </a>
                            <a target="_blank" href="#EDUCATION TOUR" >
                            <img src={education} href = "#Image2" alt="" class="image-2" />
                            </a>
                    </div>
                    <a target="_blank" href="#GROUP TRIP" >
                    <img src={group} href = "#Image3" alt="" class="image-3" />
                    </a>
                </div>
            </div>
        </div>
    )
}