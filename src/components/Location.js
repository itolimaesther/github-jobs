import React from 'react'
import WorldIcon from '@material-ui/icons/Public';

function Location() {
    return (
        <div className="location-container ">
            <form className="job-type d-flex">
                <input className="checkbox-input" type="checkbox" />
                <label className="checkbox-input__label" >Full time</label>
            </form>
            <div className="location-wraper">
                <h5 className="my-3">Location</h5>
                <div className="location-wraper__filter border d-flex mb-3 justify-content-center align-items-center rounded-lg">
                    <WorldIcon className="icon-world text-secondary"/>
                    <input className="input-box border-0" type="text" placeholder="city, state, zip-code or country"/>
                </div>
                <form className="location-wraper__city-filter">
                    <div className="city city-1">
                        <input className="checkbox-input" type="radio" name="city" value="london" />
                        <label htmlFor="london" className="checkbox-input__label" >London</label>
                    </div>
                    <div className="city city-2">
                        <input className="checkbox-input" type="radio" name="city" value="amsterdam" />
                        <label htmlFor="amsterdam" className="checkbox-input__label" >Amsterdam</label>
                    </div>
                    <div className="city city-3">
                        <input className="checkbox-input" type="radio" name="city" value="new york"/>
                        <label htmlFor="new york" className="checkbox-input__label" >New York</label>
                    </div>
                    <div className="city city-4">
                        <input className="checkbox-input" type="radio" name="city" value="berlin" />
                        <label htmlFor="berlin" className="checkbox-input__label" >Berlin</label>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Location
