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

  const resetInputField = () => {
    setSearchValue("")
  }

  const handleSearchInputChanges = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    resetInputField();
  }


  const allJobs  = jobs.jobLists

  const filterJobs = allJobs && allJobs.filter(jb => {
    return (
      jb.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  console.log(filterJobs)


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

          {filterJobs && filterJobs.map((job) =>{
            return (
              <Jobs job={job} />
            )
          })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
