import React from 'react';
import '../styles/style.css';

function Card(props) {
    return (
        <table className="table">
            <tr className="nav">
                <th>Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>

            </tr>
            <tr>
                <th className="col"><img alt={props.firstName} src={props.picture} /></th>
                <td >{props.firstName} {props.lastName}</td>
                <td >{props.email}</td>
                <td >{props.phone}</td>
                <td >{props.dob}</td>


            </tr>
        </table>

    );
}

export default Card;


