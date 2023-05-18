// Form.js

import React from 'react';
import FormStyle from '../style/Form.module.css';
import Link from 'next/link';

const Form = () => {
    return (
        <form className={FormStyle.form}>
            <div className={FormStyle.inner_form}>
                <h2>
                    Welcome. <br />
                    Please Enter Your Credentials
                </h2>

                <div className={FormStyle.inner_group}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        // binding name to details in order to change details
                    />
                </div>
                <div className={FormStyle.inner_group}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className={FormStyle.inner_group}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>

                <Link href="/register">
                    <input type="submit" value="Register" />
                </Link>
                <Link href="/dashboard">
                    <input type="submit" value="Login" />
                </Link>
            </div>
        </form>
    );
};

export default Form;
