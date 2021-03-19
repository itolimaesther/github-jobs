import React from 'react'

function JobItem({ job }) {
    

    return (
       
        <div className="card rounded-lg mb-4 border-0">
            <div className="card-body p-3 d-flex align-items-center ">
            <div className="company-logo mr-4">
                <img src={job.company_logo} alt="company's logo"/>
            </div>
            <div className="job-infos w-100" >
                <h6>{job.company}</h6>
                <p> {job.title} </p>
                <div className="job-infos__1 d-flex justify-content-between align-items-center">
                    <h5 className="job-type-mark"> {job.type} </h5>

                    <div className="job-infos__2 d-flex">
                        <p className="mr-2"> {job.location} </p>
                        <p> {job.created_at} </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default JobItem
