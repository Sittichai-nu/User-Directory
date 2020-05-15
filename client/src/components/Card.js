import React from 'react';

const Card = props => {
    return (
        <div className="card-container">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.firstName} {props.lastName}
                    </li>
                    <li>
                        <strong>Phone:</strong> {props.phone}
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;


