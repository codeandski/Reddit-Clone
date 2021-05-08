import React from 'react';
import './TopHeader.scss';
import {Link} from 'react-router-dom';


interface BudgetProps {
    children: string;
}

export function TopHeader(props: any) {
    return (
        <span className="topHeader-container">
            <span className="topHeader-authLinks">
                <div className="topHeader-signUp">Sign Up</div>
                <div className="topHeader-login">Log In</div>
            </span>
            <Link to='/'>
                <h1>Reddit Clone</h1>
            </Link>
            <h3>Search</h3>
            <input type="text"></input>
        </span>
    )
}