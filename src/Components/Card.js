import React from 'react'

const Card = (props) => {
    return(
        <div className="card">
            <div className="card-img-div">
                <img 
                    className="card-img" 
                    src={props.image} 
                    alt="bridal photo" />
            </div>
            <div className="card-second">
                <div className="card-second-div">
                <div className="card-vendor">
                    {props.vendor}
                </div>
                <div className="card-city">
                    {props.city}
                </div>
                </div>
                <div className="card-rating">
                    <i className="fa fa-star" aria-hidden="true"></i> 
                    {props.rating}
                </div>
            </div>
            <div className="card-title">
                {props.name}
            </div>
            <div className="card-price">
                <strong>Rs{props.price}</strong>
                <span className="card-price-span"> / Bridal Makeup</span> 
            </div>
        </div>
    )
}

export default Card