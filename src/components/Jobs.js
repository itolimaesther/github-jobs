import React, { useState, useEffect } from "react"
import Search from './Search'
import Location from "./Location";
import axios from 'axios'
import JobItem from './JobItem'

function Jobs() {

  const [jobs, setJobs] =  useState([])
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node')
    .then(res => {
      const jobLists = res.data
      setJobs({jobLists})
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }


  const allJobs = jobs.jobLists
  console.log(allJobs)

  let filterJobs = allJobs && allJobs.filter((job) => {
    return(
      job.title.toString().toLowerCase().includes(searchValue.toString()),
      job.company.toString().toLowerCase().includes(searchValue.toString()),
      job.benefit.toString().toLowerCase().includes(searchValue.toString()),
      job.expertise.toString().toLowerCase().includes(searchValue.toString())
    )
  })

 



    
    return (

      <div className="container ">
      <Search 
        jobs={jobs}
        searchValue={searchValue}
        handleSearch={handleSearchInputChanges}
      />

      <main>
        <div className="row">
          <div className="col">
            <Location 
              allJobs={allJobs}
              filterJobs={filterJobs}
            />
          </div>
          <div className="col-8">
            {/* <Jobs filterJobs={filterJobs} /> */}
            <div className="cards">

            {filterJobs && filterJobs.map((job, idx) => {
              return (
                <JobItem job={job} key={idx} />
              )
            }) }
          </div>
          </div>
        </div>
      </main>
    </div>
        
    )
}

export default Jobs
