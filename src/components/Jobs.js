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
      // setSearchValue({jobLists})
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const resetInputField = () => {
    setSearchValue("")
  }

  const handleSearchInputChanges = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    resetInputField();
  }


  const allJobs = jobs.jobLists

  const filterJobs = allJobs && allJobs.filter((job) => {
    return(
      job.title.toString().toLowerCase().includes(searchValue.toString())
    )
  })
    
    return (

      <div className="container ">
      <Search 
        jobs={jobs}
        searchValue={searchValue}
        handleSearch={handleSearchInputChanges}
        resetInput={resetInputField}
      />

      <main>
        <div className="row">
          <div className="col">
            <Location />
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
