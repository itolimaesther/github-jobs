import React from 'react'
import JobItem from '././JobItem'

function Jobs({job}) {
    

    return (
        <div className="cards">
            {job && job.map((jb, idx) => {
                return (
                    <JobItem job={jb} key={idx} />
                )
            })}
        </div>
    )
}

export default Jobs
