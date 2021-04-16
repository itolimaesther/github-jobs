import React from "react"
import { Link } from "react-router-dom"
import image1 from "../assets/images/content-2-img1.png"
import image2 from "../assets/images/content-2-img2.png"
import image3 from "../assets/images/content-2-img3.png"



function Home() {

    return (
        <div className="container-wraper">

            <div className="container-row">
                <div className="col-5">
                    <div className="p-5">
                        <h2 className="">Join companies from anywhere in the world.</h2>
                        <p>Work from any where in world with the best teams and collaborate with teams.</p>
                        <Link to="/jobs">
                            <button className="btn btn-primary">Apply for Jobs</button>
                        </Link>
                    </div>
                </div>
                <div className="col-7 d-flex flex-row">
                    <div className="col-3 first-col">
                        <img className="my-2" src={image1} alt=""/>
                        <img className="my-2" src={image2} alt=""/>
                    </div>
                    <div className="col-3 second-col">
                        <img className="my-2" src={image3} alt=""/>
                        <div className="bg-green w-100 h-25 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
