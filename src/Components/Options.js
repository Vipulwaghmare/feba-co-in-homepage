import React, {useState} from 'react'
import allCities from '../cities'

const Options = () => {
    const [cities, setCities] = useState(allCities)
    const [city, setCity] = useState(false)
    const [category, setCategory] = useState(false)
    const [selectedCities, setSelectedCities] = useState([])

    const handleChange = (e) => {
        let tempCities = [...cities].map(city=>{
            if(city.name===e.target.value){
                city.check = !city.check
            }
            return city
        })
        setCities(tempCities)
        setSelectedCities([])
        tempCities.map(city=>{
            if(city.check === true){
                selectedCities.push(city)
            }
        })
    }

    const CityList = (props) => {
        return (
            <div className="city-input-checkbox">
                <input 
                    type="checkbox" 
                    value={props.name}
                    checked={props.check}
                    onClick={handleChange} />
                    <span className="city-input-name">
                    {props.name}
                    </span>
            </div>
        )
    }
    
    const handleCity = () => {
        return(
            city && 
            <div className="city-main">
                <div className="city-title">
                    <button 
                        className="city-title-button"
                        onClick={()=>setCity(!city)}
                        >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <p> City </p>
                    <p> CLEAR </p>
                </div>
                <div className="city-input">
                    {allCities.map(ct => {
                        return (
                            <CityList 
                                key ={ct.name}
                                name ={ct.name}
                                check={ct.check}
                            />
                        )
                    })}
                </div>
                <div className="city-submit">
                <button 
                    className="city-submit-button"
                    onClick={()=>setCity(!city)}
                >
                    APPLY FILTER
                </button>
                </div>
            </div>
        )
    }

    const handleCategory = () => {
        return(
            category && 
            <div className="city-main">
                <div className="city-title">
                    <button 
                        className="city-title-button"
                        onClick={()=>setCategory(!category)}
                    >
                    <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <p> Category </p>
                    <p> CLEAR </p>
                </div>
                <div className="city-input">
                    <input 
                        type="radio"
                        defaultChecked
                        />
                        <span className="city-input-name">
                        Bridal Makeup Artist
                        </span>
                </div>
                <div className="city-submit">
                <button 
                    className="city-submit-button"
                    onClick={()=>setCategory(!category)}>
                    APPLY FILTER
                </button>
                </div>
            </div>
        )
    }

    return(
        <div className="options">
            {handleCity()}
            {handleCategory()}
            <button 
                onClick={()=> setCity(!city)}
                className="city options-button"> 
                City:All
            </button> 
            <button 
                onClick = {()=>setCategory(!category)}
                className="category options-button"> 
                Category: Bridal Makeup Artist
            </button>
        </div>
    )
}

export default Options