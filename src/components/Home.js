import React from "react"
import { Link } from "react-router-dom"
import image1 from "../assets/images/content-2-img1.png"


function Home() {

    return (
        <div className="container-wraper">

            <div className="container-row">
                <div className="col-5">
                    <div className="p-5">
                        <h2 className="">Join companies from anywhere in the world.</h2>
                        <p>hhhhh</p>
                        <Link to="/jobs">
                            <button className="btn btn-primary">Apply for Jobs</button>
                        </Link>
                    </div>
                </div>
                <div className="col-7">
                    <img src={image1} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Home
