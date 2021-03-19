import React from 'react'
import JobItem from '././JobItem'

function Jobs({filterJobs}) {

    console.log(filterJobs)
    
    return (
        <div className="cards">

            {filterJobs && filterJobs.map((job, idx) => {
              return (
                <JobItem job={job} key={idx} />
              )
            }) }
        </div>
    )
}

export default Jobs
