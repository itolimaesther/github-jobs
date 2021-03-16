import React from 'react'
import BriefCaseIcon from '@material-ui/icons/BusinessCenter';




function Search({searchValue, handleSearch}) {


    return (
        <div className="hero-img mb-5">
            <div className="search-wraper d-flex justify-content-center align-items-center rounded-lg">
                    <BriefCaseIcon className="icon-brief-case text-secondary" />
                    <form action="" role="search" className="w-100">
                        <input className="input-box border-0" type="text" value={searchValue} onChange={handleSearch} placeholder="titles, companies, expertise or benefits" />
                    </form>
                    <button type="submit" onClick={handleSearch} className="btn-search border-0 rounded-lg">Search</button>
            </div>
        </div>
    )
}

export default Search
