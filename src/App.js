import React, { useState, useEffect } from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import Header from "./components/Header";
import Search from './components/Search'
import Location from "./components/Location";
import Jobs from "./components/Jobs";

function App() {

  const [jobs, setJobs] =  useState([])
  const [searchValue, setSearchValue] = useState("");
  // const [filterJobs, setFilterJobs] = useState([])

  
  
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
      <Header />
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
            <Jobs filterJobs={filterJobs} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
