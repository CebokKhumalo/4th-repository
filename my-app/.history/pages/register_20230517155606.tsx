import React from 'react';
import FormStyle from '../style/Form.module.css';

const register = () => {
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
                    <label htmlFor="userName">User Name:</label>
                    <input type="userName" name="userName" id="userName" />
                </div>

                <div className={FormStyle.inner_group}>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="phoneNumber"
                        name="phoneNumber"
                        id="phoneNumber"
                    />
                </div>
                <div className={FormStyle.inner_group}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>

                <input type="submit" value="Login" />
            </div>
        </form>
    );
};

export default register;
