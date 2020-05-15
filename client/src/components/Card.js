import React from 'react';

const Card = props => {
    return (
        <div className="card-container">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                    <span>name:{props.firstName}{props.lastName}</span>
                    <span>phone:{props.phone}</span>
                    <span>email:{props.email}</span>               
            </div>
        </div>
    )
}

export default Card;